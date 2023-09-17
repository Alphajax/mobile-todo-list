import {selectListData} from '../CreateToDoForm/constants';

export const getPriorityNameByKey = (key: number): string | null => {
  return selectListData.find(item => `${item.key}` === `${key}`)?.value || null;
};
