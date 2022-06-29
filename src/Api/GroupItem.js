import RequestClient from "./RequestClient";

export const GroupItem = {
  getAll() {
    const pathURL = "/group-item";
    return RequestClient.get(pathURL);
  },
};
