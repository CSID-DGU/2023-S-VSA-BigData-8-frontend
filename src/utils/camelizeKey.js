import { camelCase, isArray, isObject, transform } from 'lodash';

// snake -> camel
export const camelizeKey = (obj) =>
  transform(obj, (acc, value, key, target) => {
    const camelKey = isArray(target) ? key : isKorean(key) ? key : camelCase(key);

    // @ts-ignore
    acc[camelKey] = isObject(value) ? camelizeKey(value) : value;
  });

const isKorean = (sentence) => {
  const koreanChecker = /[\u3131-\uD79D]/giu;

  return sentence.match(koreanChecker);
};
