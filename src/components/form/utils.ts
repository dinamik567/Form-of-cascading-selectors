import { ArrayOfSelectValueObjectI } from "../../types";
import { initialValueForForm } from "../../settings";

function createArrayOfSelectValueObject(childInd: number[]) {
  return childInd.reduce((acc: ArrayOfSelectValueObjectI[], index: number) => {
    return [...acc, initialValueForForm[index]];
  }, []);
}

function getArrayChildrenIndex(parentId: number) {
  if (parentId === 0) {
    return [];
  }

  return initialValueForForm[parentId].childIds;
}

export function getArrayOfSelectValueObject(parentId: number) {
  const countryChildrenIndex = getArrayChildrenIndex(parentId);
  return createArrayOfSelectValueObject(countryChildrenIndex);
}
