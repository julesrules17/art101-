/* 
Author: Julia Gompertz
Date: 2 June 2024
License: Public Domain
*/

<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
import { axios } from "@pipedream/platform"
export default defineComponent({
  props: {
    swapi: {
      type: "app",
      app: "swapi",
    }
  },
  async run({steps, $}) {
    return await axios($, {
      url: `https://swapi.dev/api/films/1/`,
    })
  },
})