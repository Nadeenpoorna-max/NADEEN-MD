try {
    const axios = require("axios");
    const fs = require("fs");
    const cheerio = require("cheerio");

    async function aptoideDl(query) {
      try {
         const response = await axios.get("http://ws75.aptoide.com/api/7/apps/search", {
            params: { query, limit: 1 },
         });
         const app = response.data.datalist.list[0];
   
         return {
            img: app.icon,
            developer: app.store.name,
            appname: app.name,
            link: app.file.path,
         };
      } catch (error) {
         console.error("Error fetching app information:", error);
         throw error;
      }
   }
    module.exports = {
	facebook,
       instagram,
       tiktok,
       spotify,
       pinterest,
       youtube,
       aptoideDl,
       shortenUrl,
    };
 } catch (error) {
    console.log("Scraper ERROR:", error);
 }
