import { LAUNCH_API_PATH } from "@/constants/apiPaths";
const axios = require("axios");

export const fetchLaunches = async ({ page, limit }) => {
  try {
    const queryPayload = {
      select: "id name success upcoming failures links",
      sort: "date_utc",
      limit: limit,
      page: page,
    };

    const url = LAUNCH_API_PATH;
    const response = await axios.post(url, {
      options: queryPayload,
    });

    await new Promise((res) => {
      setTimeout(() => {
        res();
      }, 3000);
    });

    console.log('Ha Hoo')

    const {
      docs,
      page: responsePage,
      limit: responseLimit,
      totalPages,
      hasPrevPage,
      hasNextPage,
    } = response.data;

    return {
      rockets: docs || [],
      totalPages,
      page: responsePage,
      limit: responseLimit,
      hasPrevPage,
      hasNextPage,
    };
  } catch (err) {
    console.log(err);
    return {
      rockets: [],
      totalPages: 0,
      page: 1,
      limit: 10,
      hasPrevPage: false,
      hasNextPage: false,
    };
  }
};
