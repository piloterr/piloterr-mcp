// Generated from the Piloterr OpenAPI document. Do not edit by hand.

import type { EndpointEntry } from "./types.js";

export const MODE: "catalog" | "tools" = "catalog";

export const CATALOG: readonly EndpointEntry[] = [
  {
    name: "aboutyou_product",
    title: "About You Product",
    path: "/v2/aboutyou/product",
    methods: ["GET", "POST"],
    description:
      "About You Product. Read one About You product from a product URL or a keyword. A keyword opens the first search hit. Set region when the query does not already name the shop. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Product URL or keyword. A keyword opens the first search result.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Shop code. Default is fr. A full link in query picks the shop, and a conflicting region returns 400.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "Return the rendered HTML instead of JSON.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "aboutyou_search",
    title: "About You Search",
    path: "/v2/aboutyou/search",
    methods: ["GET", "POST"],
    description:
      "About You Search. Search an About You shop with a keyword or a search URL. Pick the country with region, or let a full link choose the shop. Cards include brand, price, and the product link. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Keyword or About You search, category, or brand URL.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Shop code. Default is fr. A full link in query picks the shop, and a conflicting region returns 400.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Only page 1 is available.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "Return the rendered HTML instead of JSON.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "action_product",
    title: "Action Product",
    path: "/v2/action/product",
    methods: ["GET", "POST"],
    description:
      "Action Product. Action Product API: fetch full product page data from a product ID or URL on Action.com. Returns pricing, specs, images, breadcrumbs and availability via browser rendering. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Action product ID or full product URL.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Locale (fr-fr, de-de, pt-pt, …) or country code (fr, de, pt). Default: fr-fr.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML page source as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "action_search",
    title: "Action Search",
    path: "/v2/action/search",
    methods: ["GET", "POST"],
    description:
      "Action Search. Action Search API: search product listings by keyword or URL on Action.com across European locales. Returns prices, images, locale, currency and pagination via browser rendering. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Search keyword or full Action.com search URL.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Locale (fr-fr, de-de, pt-pt, …) or country code (fr, de, pt). Default: fr-fr.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "1-based page number (default: 1).",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML page source as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "aldi_product",
    title: "Aldi Product",
    path: "/v2/aldi/product",
    methods: ["GET", "POST"],
    description:
      "Aldi Product. Aldi Product API: fetch full product page data from an Aldi URL or path slug. Returns pricing, images, description, category and cooling flags. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Aldi product page URL or site path slug.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Target country when query is a path only (default: fr). Ignored for full product URLs.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML page source as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "aldi_search",
    title: "Aldi Search",
    path: "/v2/aldi/search",
    methods: ["GET", "POST"],
    description:
      "Aldi Search. Aldi Search API: list products from an Aldi category page URL or path across FR, DE, NL and Canarias shops. Returns prices, thumbnails and pagination. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Aldi category page URL or site path.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description: "Target country when query is a path only (default: fr).",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "1-based page number override (default: read from URL or 1).",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML page source as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "alibaba_product",
    title: "Alibaba Product",
    path: "/v2/alibaba/product",
    methods: ["GET", "POST"],
    description:
      "Alibaba Product. Alibaba Product API. Fetch a full B2B product page by URL or product ID with optional locale subdomain. Browser rendering returns tiered pricing, seller profile and lead times. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full Alibaba product URL or numeric product ID.",
      },
      {
        name: "subdomain",
        type: "string",
        required: false,
        description:
          "Locale subdomain when query is a bare product ID, or to override the host on a product URL.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the rendered HTML as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "alibaba_search",
    title: "Alibaba Search",
    path: "/v2/alibaba/search",
    methods: ["GET", "POST"],
    description:
      "Alibaba Search. Alibaba Search API. Query B2B product listings by keyword or search URL across 17 locale subdomains. Request mode returns prices, MOQ, seller data and pagination. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Search keyword or full Alibaba search URL.",
      },
      {
        name: "subdomain",
        type: "string",
        required: false,
        description:
          "Locale subdomain for keyword searches when query is not a full URL.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "1-based page number (20 results per page). Default: 1.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw open-s JSON as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "aliexpress_product",
    title: "AliExpress Product",
    path: "/v2/aliexpress/product",
    methods: ["GET", "POST"],
    description:
      "AliExpress Product. AliExpress Product API: scrape live /item/ product pages from a full URL. Get title, images, seller identity, pricing, specs, delivery, and FAQs as JSON via browser rendering. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full AliExpress product page URL (/item/{id}.html).",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML page source as {"result": "..."} instead of parsed JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "aliexpress_product_reviews",
    title: "AliExpress Reviews",
    path: "/v2/aliexpress/product/reviews",
    methods: ["GET", "POST"],
    description:
      "AliExpress Reviews. AliExpress Reviews API: list buyer reviews for a product id or item URL. Each review includes author, star rating, text, date, and photos when the buyer attached them. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "AliExpress product id or item URL.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page number, starting at 1. Defaults to 1. The feed returns up to 20 reviews per page. pagination.next is the next page URL, or null on the last page.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw feed body as {"result": "..."} instead of parsed JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "aliexpress_search",
    title: "AliExpress Search",
    path: "/v2/aliexpress/search",
    methods: ["GET", "POST"],
    description:
      "AliExpress Search. AliExpress Search API: search by keyword or wholesale URL and get product listings with prices, ratings, sold counts, and pagination as JSON via browser rendering. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Search keyword or full AliExpress search results URL.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML page source as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "aliexpress_store_product",
    title: "AliExpress Store Product",
    path: "/v2/aliexpress/store/product",
    methods: ["GET", "POST"],
    description:
      "AliExpress Store Product. AliExpress Store Product API: list products from an AliExpress seller store by URL or store ID. Returns store metadata and product cards (~40 SSR items) as JSON via browser rendering. Pagination is not supported. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "AliExpress store URL or numeric store ID.",
      },
      {
        name: "sort",
        type: "string",
        required: false,
        description: "Optional sort alias for the store all-items page.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML page source as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "allegro_product",
    title: "Allegro Product",
    path: "/v2/allegro/product",
    methods: ["GET", "POST"],
    description:
      "Allegro Product. Allegro Product API. Extract full product page data from allegro.pl by URL (/produkt/, /oferta/, /ogloszenie/). Browser rendering, 3 credits per call. Pair with Allegro Search (3 credits) for listing discovery. Credit cost: 3 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Full allegro.pl product or offer URL to extract structured PDP data.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "allegro_search",
    title: "Allegro Search",
    path: "/v2/allegro/search",
    methods: ["GET", "POST"],
    description:
      "Allegro Search. Allegro Search API. Query product listings by keyword, optional page number, or full allegro.pl listing URL. Returns results with prices, sellers, sponsorship flags and pagination. 3 credits per call. Credit cost: 3 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Search keyword or full Allegro listing URL.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number for keyword searches (default 1).",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "amazon_product",
    title: "Amazon Product",
    path: "/v2/amazon/product",
    methods: ["GET", "POST"],
    description:
      "Amazon Product. Efficiently extract product details from Amazon for dynamic retail insights, including price, stock, features, and seller data. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Amazon product ASIN (Amazon Standard Identification Number) to retrieve full product details for.",
      },
      {
        name: "domain",
        type: "string",
        required: false,
        description:
          "Amazon domain extension to query. Controls which Amazon marketplace is targeted.",
        default: "com",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "amazon_product_offer",
    title: "Amazon Product Offer",
    path: "/v2/amazon/product/offer",
    methods: ["GET", "POST"],
    description:
      "Amazon Product Offer. Efficiently extract details of third-party seller offers for any Amazon product across multiple marketplaces. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Amazon product ASIN (Amazon Standard Identification Number) to retrieve third-party seller offers for.",
      },
      {
        name: "domain",
        type: "string",
        required: false,
        description:
          "Amazon domain extension to query. Controls which Amazon marketplace is targeted.",
        default: "com",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number for paginated offer results.",
        default: 1,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "amazon_search",
    title: "Amazon Search",
    path: "/v2/amazon/search",
    methods: ["GET", "POST"],
    description:
      "Amazon Search. Efficiently scrape Amazon search results for real-time product data and insights across multiple Amazon marketplaces. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Keyword or phrase to search for products on Amazon.",
      },
      {
        name: "domain",
        type: "string",
        required: false,
        description:
          "Amazon domain extension to query. Controls which Amazon marketplace is searched.",
        default: "com",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page number for paginated search results. Each page returns up to 60 results.",
        default: 1,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "apartments_property",
    title: "Apartments Property",
    path: "/v2/apartments/property",
    methods: ["GET", "POST"],
    description:
      "Apartments Property. Extract a full Apartments.com rental listing from a property URL, including amenities, gallery, description, geolocation, and unit details via browser rendering. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full Apartments.com property listing URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "apartments_search",
    title: "Apartments Search",
    path: "/v2/apartments/search",
    methods: ["GET", "POST"],
    description:
      "Apartments Search. Search Apartments.com rentals from a full city or browse URL and retrieve prices, photos, addresses, phone numbers, and pagination via browser rendering. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full Apartments.com search or city browse URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "argenprop_property",
    title: "Argenprop Property",
    path: "/v2/argenprop/property",
    methods: ["GET", "POST"],
    description:
      "Argenprop Property. Read one Argenprop listing from its URL or id. You get price, address, rooms, expenses, and the agent when the page shows them. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "The full listing page on argenprop.com. Copy it from results[].url on [Argenprop Search](https://www.piloterr.com/library/argenprop-search). The listing id is the number after the double dash.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "argenprop_search",
    title: "Argenprop Search",
    path: "/v2/argenprop/search",
    methods: ["GET", "POST"],
    description:
      "Argenprop Search. Search Argenprop by neighbourhood or city. Set operation to venta or alquiler, and property_type such as departamentos or casas. Page with pagina. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "The place to search, or a full Argenprop results page.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Which page of the list to open. The first page is 1. The placeholder is 2.",
        default: 1,
      },
      {
        name: "operation",
        type: "string",
        required: false,
        description:
          "Sale or rent, when query is a place name. The placeholder is venta, which means for sale. alquiler is a long-term rental. alquiler-temporal is a short stay. sale, buy, and rent are accepted as aliases.",
        default: "venta",
      },
      {
        name: "property_type",
        type: "string",
        required: false,
        description:
          "The kind of home, when query is a place name. The placeholder is departamentos, which means apartments. Also accepted: casas (houses), ph, terrenos, locales, oficinas, and quintas. casa and house map to casas.",
        default: "departamentos",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "argos_product",
    title: "Argos Product",
    path: "/v2/argos/product",
    methods: ["GET", "POST"],
    description:
      "Argos Product. Argos Product API: one UK product by id or URL. Browser rendering (2 credits). Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Argos product id or product URL.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "When true, return raw HTML.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "argos_search",
    title: "Argos Search",
    path: "/v2/argos/search",
    methods: ["GET", "POST"],
    description:
      "Argos Search. Search the Argos UK catalogue by keyword and page the results. Prices are in pounds. A one-word query that Argos turns into a brand page with no product cards returns no results. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Keyword or Argos UK search URL.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number from 1.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: 'When true, return raw HTML as {"result": "..."}.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "arxiv_paper",
    title: "arXiv Paper",
    path: "/v2/arxiv/paper",
    methods: ["GET", "POST"],
    description:
      "arXiv Paper. Fetch one arXiv paper by id or by an abs, pdf, or html URL. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. arXiv id or an abs, pdf, or html URL. Example: 2201.00978 or https://arxiv.org/abs/cond-mat/0011267v1.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "arxiv_search",
    title: "arXiv Search",
    path: "/v2/arxiv/search",
    methods: ["GET", "POST"],
    description:
      "arXiv Search. Search arXiv papers by keyword, author query such as au:einstein, or arXiv id. A paper URL returns 400. Page through results when the match count is large. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. Keyword, fielded query such as au:einstein, arXiv id, or an arxiv.org search URL. Example: electron. A paper URL such as https://arxiv.org/abs/2201.00978 returns 400.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Optional. Page number from 1. Example: 2. Defaults to 1. Each page has 10 papers.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "auchan_product",
    title: "Auchan Product",
    path: "/v2/auchan/product",
    methods: ["GET", "POST"],
    description:
      "Auchan Product. Effortlessly extract product details from Auchan for dynamic business insights, including nutritional information, ingredients, ratings, and reviews. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "URL of the Auchan product page to extract data from.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "auchan_search",
    title: "Auchan Search",
    path: "/v2/auchan/search",
    methods: ["GET", "POST"],
    description:
      "Auchan Search. Extract Auchan product listings from keyword searches for insightful market analysis and competitive edge. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Search keyword or Auchan search URL to retrieve product listings.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number for paginated search results.",
        default: 1,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "autodoc_product",
    title: "Autodoc Product",
    path: "/v2/autodoc/product",
    methods: ["GET", "POST"],
    description:
      "Autodoc Product. Scrape Autodoc product pages: price, specs, EAN, images, compatibility, and TecDoc-related vehicle data via the Related endpoint. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "HTTPS URL of an Autodoc product page.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "autodoc_product_related",
    title: "Autodoc Product Related",
    path: "/v2/autodoc/product/related",
    methods: ["GET", "POST"],
    description:
      "Autodoc Product Related. Vehicle fitment lines per maker for an Autodoc product. All parameters from Product fetch.params are required. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Same HTTPS product page URL as Product.",
      },
      {
        name: "maker_id",
        type: "number",
        required: true,
        description:
          "TecDoc maker id from compatibility.cars[] / compatibility.trucks[], e.g. 93 for RENAULT.",
      },
      {
        name: "vehicle_type",
        type: "string",
        required: true,
        description:
          "Required. pkw (passenger cars) or lkw (commercial). Must match the compatibility row.",
        default: "pkw",
      },
      {
        name: "maker_name",
        type: "string",
        required: true,
        description:
          "Required maker label from compatibility, e.g. RENAULT. Used to parse vehicle lines.",
      },
      {
        name: "product_id",
        type: "number",
        required: true,
        description:
          "Required article id from Product response or URL path, e.g. 7999541.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "autodoc_search",
    title: "Autodoc Search",
    path: "/v2/autodoc/search",
    methods: ["GET", "POST"],
    description:
      "Autodoc Search. Search Autodoc by URL: keyword pages use /search?keyword=… (e.g. frein on auto-doc.fr). Extract product cards, prices, and pagination. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Full Autodoc search/listing URL, or path only when domain sets the shop.",
      },
      {
        name: "domain",
        type: "string",
        required: false,
        description:
          "Regional shop hostname without https:// or www. (e.g. auto-doc.fr, autodoc.de). Omit to default to autodoc.de.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "autoeurope_result",
    title: "Auto Europe Result",
    path: "/v2/autoeurope/result",
    methods: ["GET", "POST"],
    description:
      "Auto Europe Result. Read one vehicle from an Auto Europe quote. Pass the offer id from Search, with the same pickup and dates. You get the supplier, the SIPP code, and the package prices. Credit cost: 1 credit per call.",
    params: [
      {
        name: "offer_id",
        type: "string",
        required: true,
        description:
          "Vehicle id from search results[].id, or a package id of that vehicle.",
      },
      {
        name: "pickup",
        type: "string",
        required: true,
        description: "Same pickup place as the search. Example: CDG",
      },
      {
        name: "pickup_date",
        type: "string",
        required: true,
        description:
          "Same pickup date as the search, YYYY-MM-DD. Example: 2026-11-06",
      },
      {
        name: "dropoff_date",
        type: "string",
        required: true,
        description:
          "Same return date as the search, YYYY-MM-DD, after pickup_date. Example: 2026-11-09",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Country site used for the search. Default fr. Example: fr. There is no page parameter.",
      },
      {
        name: "dropoff",
        type: "string",
        required: false,
        description: "Return place when it differs from pickup.",
      },
      {
        name: "pickup_time",
        type: "string",
        required: false,
        description: "Pickup time HH:MM. Default 10:00.",
        default: "10:00",
      },
      {
        name: "dropoff_time",
        type: "string",
        required: false,
        description: "Return time HH:MM. Default 10:00.",
        default: "10:00",
      },
      {
        name: "driver_age",
        type: "number",
        required: false,
        description: "Driver age from 18 to 99. Default 40.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "When true, return the raw quote HTML instead of JSON.",
        default: false,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "autoeurope_search",
    title: "Auto Europe Search",
    path: "/v2/autoeurope/search",
    methods: ["GET", "POST"],
    description:
      "Auto Europe Search. Quote a rental car on Auto Europe. Pass pickup, pickup date, and dropoff date. Region chooses the country site and its currency. The whole quote comes back on one page. Credit cost: 1 credit per call.",
    params: [
      {
        name: "pickup",
        type: "string",
        required: true,
        description: "Pickup place or airport code.",
      },
      {
        name: "pickup_date",
        type: "string",
        required: true,
        description: "Pickup date, YYYY-MM-DD.",
      },
      {
        name: "dropoff_date",
        type: "string",
        required: true,
        description: "Return date, YYYY-MM-DD, after pickup_date.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Country site. Default fr. Example: fr. A code such as de or uk, or a full Auto Europe URL. There is no page parameter.",
      },
      {
        name: "dropoff",
        type: "string",
        required: false,
        description: "Return place when it differs from pickup.",
      },
      {
        name: "pickup_time",
        type: "string",
        required: false,
        description: "Pickup time HH:MM. Default 10:00.",
        default: "10:00",
      },
      {
        name: "dropoff_time",
        type: "string",
        required: false,
        description: "Return time HH:MM. Default 10:00.",
        default: "10:00",
      },
      {
        name: "driver_age",
        type: "number",
        required: false,
        description: "Driver age from 18 to 99. Default 40.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "When true, return the raw quote HTML instead of JSON.",
        default: false,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "autoscout24_ad",
    title: "AutoScout24 Ad",
    path: "/v2/autoscout24/ad",
    methods: ["GET", "POST"],
    description:
      "AutoScout24 Ad. Read one AutoScout24 listing, including an inactive ad that still exposes the listing. Price, vehicle, seller, and location. (1 credit) Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Full AutoScout24 listing URL. An inactive listing that still contains script#__NEXT_DATA__ is returned with status Inactive. A page without that selector returns 404.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "autoscout24_search",
    title: "AutoScout24 Search",
    path: "/v2/autoscout24/search",
    methods: ["GET", "POST"],
    description:
      "AutoScout24 Search. Search AutoScout24 listings from a search URL. Each card has make, model, numeric price, mileage, and the listing URL. (1 credit) Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Full AutoScout24 search URL. Filters and page in the URL are kept. page starts at 1. A page with no cards returns 404.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "autotrader_ad",
    title: "Autotrader Ad",
    path: "/v2/autotrader/ad",
    methods: ["GET", "POST"],
    description:
      "Autotrader Ad. Extract full vehicle details from an AutoTrader UK car-details URL, including price, specs, gallery, seller, and description via browser rendering. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full AutoTrader UK car details URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "autotrader_search",
    title: "Autotrader Search",
    path: "/v2/autotrader/search",
    methods: ["GET", "POST"],
    description:
      "Autotrader Search. Search AutoTrader UK listings from a car-search URL and retrieve prices, specs, photos, seller info, and pagination via browser rendering. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full AutoTrader UK car search URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "bestbuy_product",
    title: "Best Buy Product",
    path: "/v2/bestbuy/product",
    methods: ["GET", "POST"],
    description:
      "Best Buy Product. Get a Best Buy US or Canada product page: title, price, brand, stock, images, categories and specs via browser rendering. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full Best Buy product URL.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return rendered HTML as {"result": "..."} instead of JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "bestbuy_product_reviews",
    title: "Best Buy Reviews",
    path: "/v2/bestbuy/product/reviews",
    methods: ["GET", "POST"],
    description:
      "Best Buy Reviews. Get customer reviews for a Best Buy product URL: rating, review text, author, photos and pagination. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Best Buy product URL or reviews URL.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page number, starting at 1. Default 1. A value above 1 overrides page on the Best Buy URL. If this stays at 1, a page already on the URL is kept.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          "When true, return the rendered HTML instead of JSON. Default false.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "bestbuy_search",
    title: "Best Buy Search",
    path: "/v2/bestbuy/search",
    methods: ["GET", "POST"],
    description:
      "Best Buy Search. Search Best Buy US or Canada by keyword or search URL. Returns product listings with price, rating and pagination via browser rendering. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Keyword or full Best Buy search URL.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Best Buy country when query is not a full URL (default: com).",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number (default: 1).",
      },
      {
        name: "sort",
        type: "string",
        required: false,
        description: "Sort order (default: best_selling).",
        default: "best_selling",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return rendered HTML as {"result": "..."} instead of JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "bhphotovideo_product",
    title: "B&H Photo Video Product",
    path: "/v2/bhphotovideo/product",
    methods: ["GET", "POST"],
    description:
      "B&H Photo Video Product. Read a B&H Photo Video product from its URL or id. Returns price, rating, specifications, and box contents. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Product URL or id.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          "When true, return the raw HTML. The string false stays false.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "bhphotovideo_search",
    title: "B&H Photo Video Search",
    path: "/v2/bhphotovideo/search",
    methods: ["GET", "POST"],
    description:
      "B&H Photo Video Search. Search B&H Photo Video by keyword or search URL. Returns BH numbers, dollar prices, and a next page URL. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Keyword or a bhphotovideo.com search URL.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number, starting at 1. Example: 2.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          "When true, return the raw HTML. The string false stays false.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "bing_search",
    title: "Bing Search",
    path: "/v2/bing/search",
    methods: ["GET", "POST"],
    description:
      "Bing Search. Scrape real-time Bing search results with full control over location, language, and pagination. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "The search query to execute on Bing. Supports all Bing advanced search operators.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number of results to retrieve. Used for pagination.",
      },
      {
        name: "num",
        type: "number",
        required: false,
        description: "Number of results per page. Minimum: 10, Maximum: 50.",
      },
      {
        name: "location",
        type: "string",
        required: false,
        description:
          "City or region from which the search should originate. If multiple locations match, the most popular one is selected.",
      },
      {
        name: "lat",
        type: "number",
        required: false,
        description: "GPS latitude coordinate for the search origin.",
      },
      {
        name: "lon",
        type: "number",
        required: false,
        description: "GPS longitude coordinate for the search origin.",
      },
      {
        name: "mkt",
        type: "string",
        required: false,
        description:
          "Market code combining language and country, in the form <language>-<country>. Defines where the results come from.",
      },
      {
        name: "cc",
        type: "string",
        required: false,
        description:
          "Two-letter ISO 3166-1 country code defining the country to search from.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "bitiba_product",
    title: "Bitiba Product",
    path: "/v2/bitiba/product",
    methods: ["GET", "POST"],
    description:
      "Bitiba Product. Read one product from a live Bitiba shop, including the selected variant price and the pack list. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Product URL, shop path, or product number. Example: 75036. A search link returns 400.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Shop used when query is a number or a path. de is Germany (default).",
        default: "de",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "Set to true to get the raw HTML in result.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "bitiba_search",
    title: "Bitiba Search",
    path: "/v2/bitiba/search",
    methods: ["GET", "POST"],
    description:
      "Bitiba Search. Search a live Bitiba country shop. Germany is the default. www.bitiba.com is closed and returns 400. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "What to look for. A word such as hundefutter, or a Bitiba search link. A product link returns 400. www.bitiba.com returns 400.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Country shop. de is Germany (default), fr is France, uk is the United Kingdom. gb means uk.",
        default: "de",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number, starting at 1. Page 2 uses p=2.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "Set to true to get the raw HTML in result.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "bol_product",
    title: "Bol Product",
    path: "/v2/bol/product",
    methods: ["GET", "POST"],
    description:
      "Bol Product. Read one bol.com product by URL or product id, in nl, be-nl, or be-fr. You get the selling price, the list price, and the seller. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Product URL or numeric product id.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Shop. Use nl for the Netherlands in Dutch, be-nl for Belgium in Dutch, or be-fr for Belgium in French. Leave empty for nl. A full URL picks the shop from the path.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: 'When true, return the raw HTML as {"result": "..."}.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "bol_search",
    title: "Bol Search",
    path: "/v2/bol/search",
    methods: ["GET", "POST"],
    description:
      "Bol Search. Search bol.com by keyword. Region is nl, be-nl, or be-fr. Page the product cards. Sponsored ads can repeat across pages. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Keyword or full bol.com search URL. A product URL is rejected.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Shop. Use nl for the Netherlands in Dutch, be-nl for Belgium in Dutch, or be-fr for Belgium in French. Leave empty for nl. A full URL picks the shop from /nl/nl/, /be/nl/, or /be/fr/.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page number, starting at 1. Page 2 asks bol for the next screen of the same search.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: 'When true, return the raw HTML as {"result": "..."}.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "boulanger_product",
    title: "Boulanger Product",
    path: "/v2/boulanger/product",
    methods: ["GET", "POST"],
    description:
      "Boulanger Product. Read one Boulanger product from its URL or product id. You get price, brand, rating, seller, and specifications. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Product URL /ref/{id}, or the numeric product id.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, returns the raw HTML instead of the parsed JSON. The response shape is {"result": "<html>..."}. Default false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "boulanger_search",
    title: "Boulanger Search",
    path: "/v2/boulanger/search",
    methods: ["GET", "POST"],
    description:
      "Boulanger Search. Search Boulanger by keyword and page the product grid. Cards include price, brand, seller, and the product URL. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Keyword, a Boulanger /resultats URL, or a /c/ category URL.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page number, from 1. Default is 1. Page 2 is sent as numPage=2 and returns different product ids.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, returns the raw HTML instead of the parsed JSON. The response shape is {"result": "<html>..."}. Default false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "brave_search",
    title: "Brave Search",
    path: "/v2/brave/search",
    methods: ["GET", "POST"],
    description:
      "Brave Search. Access the Brave search engine results directly through our efficient Piloterr service for reliable data scraping. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "The search query to execute on Brave Search. Supports all standard Brave search operators.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number of results to retrieve. Used for pagination.",
        default: 1,
      },
      {
        name: "gl",
        type: "string",
        required: false,
        description: "Country code, for example us, fr, gb, de.",
        default: "us",
      },
      {
        name: "hl",
        type: "string",
        required: false,
        description: "Language code, for example en, fr, de.",
        default: "en",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "bricodepot_product",
    title: "Brico Dépôt Product",
    path: "/v2/bricodepot/product",
    methods: ["GET", "POST"],
    description:
      "Brico Dépôt Product. Read one Brico Dépôt product from its product URL. You get price, brand, SKU, and availability. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Product URL /p/{ean}/{slug}.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "bricodepot_search",
    title: "Brico Dépôt Search",
    path: "/v2/bricodepot/search",
    methods: ["GET", "POST"],
    description:
      "Brico Dépôt Search. Search Brico Dépôt with a /produits/ listing URL, not a keyword box. Page 2 is the same path with /2 at the end. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Brico Dépôt listing URL under /produits/.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page from 1. Page 2 is the /2 path suffix.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "bricorama_product",
    title: "Bricorama Product",
    path: "/v2/bricorama/product",
    methods: ["GET", "POST"],
    description:
      "Bricorama Product. Read one Bricorama product from its URL. You get price, brand, and the product details. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Product URL /p/{slug}/{ean}.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "bricorama_search",
    title: "Bricorama Search",
    path: "/v2/bricorama/search",
    methods: ["GET", "POST"],
    description:
      "Bricorama Search. Search Bricorama by keyword or search URL and page the home-improvement grid. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Keyword, or a Bricorama /search URL.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page from 1. Sent as ?page= on the listing.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "carrefour_product",
    title: "Carrefour Product",
    path: "/v2/carrefour/product",
    methods: ["GET", "POST"],
    description:
      "Carrefour Product. Read one Carrefour.fr product from its page URL. Every product returns the same keys: price, brand, pack size, Nutriscore, categories, unit price, and customer reviews. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Product page URL on www.carrefour.fr. The path starts with /p/.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "carrefour_search",
    title: "Carrefour Search",
    path: "/v2/carrefour/search",
    methods: ["GET", "POST"],
    description:
      "Carrefour Search. Search for products on Carrefour by keyword or URL, returning structured listings with prices, ratings, and pagination. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Search keyword or full Carrefour search page URL.",
      },
      {
        name: "domain",
        type: "string",
        required: false,
        description: "Carrefour domain to search on.",
        default: "fr",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number to retrieve.",
        default: 1,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "carrefour_suggest",
    title: "Carrefour Suggest",
    path: "/v2/carrefour/suggest",
    methods: ["GET", "POST"],
    description:
      "Carrefour Suggest. Get product suggestions from Carrefour by keyword or EAN, returning matching products with pricing, availability, and product details. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Search keyword or EAN code to get product suggestions from Carrefour.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "castorama_product",
    title: "Castorama Product",
    path: "/v2/castorama/product",
    methods: ["GET", "POST"],
    description:
      "Castorama Product. Read one Castorama product from its URL. You get price, brand, and specifications. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Product URL ending in _CAFR.prd.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "castorama_search",
    title: "Castorama Search",
    path: "/v2/castorama/search",
    methods: ["GET", "POST"],
    description:
      "Castorama Search. Search Castorama by keyword or search URL and page the DIY listings. Cards include title, price, and product link. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Keyword, or a Castorama listing URL (/search or a .cat category).",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page from 1. Sent as ?page= on the listing.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "cdiscount_product",
    title: "Cdiscount Product",
    path: "/v2/cdiscount/product",
    methods: ["GET", "POST"],
    description:
      "Cdiscount Product. Extract full product details from a Cdiscount product page, including price, seller, ratings, specifications, and offers. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full Cdiscount product page URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "cdiscount_product_offer",
    title: "Cdiscount Product Offer",
    path: "/v2/cdiscount/product/offer",
    methods: ["GET", "POST"],
    description:
      "Cdiscount Product Offer. Retrieve all marketplace seller offers for a Cdiscount product, including prices, seller ratings, shipping costs, and availability. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Cdiscount product offer page URL. Pass the multiple_offer_url value returned by the Cdiscount Product API.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "cdiscount_search",
    title: "Cdiscount Search",
    path: "/v2/cdiscount/search",
    methods: ["GET", "POST"],
    description:
      "Cdiscount Search. Extract product listings from Cdiscount search results or category pages for market intelligence and competitive analysis. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Cdiscount search results page URL. Use any URL from a search or category browse on cdiscount.com.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "centris_property",
    title: "Centris Property",
    path: "/v2/centris/property",
    methods: ["GET", "POST"],
    description:
      "Centris Property. Read one Centris property from its URL or listing id. You get price, address, rooms, and the broker. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full Centris listing URL, in English or French.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "centris_search",
    title: "Centris Search",
    path: "/v2/centris/search",
    methods: ["GET", "POST"],
    description:
      "Centris Search. Search Centris listings by city or by a full results URL. Use the English or French path. Page through properties for sale. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Place name or a full Centris results URL.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number, starting at 1. Default is 1.",
        default: 1,
      },
      {
        name: "language",
        type: "string",
        required: false,
        description:
          "Results language when query is a place name. Default is en.",
        default: "en",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "chewy_product",
    title: "Chewy Product",
    path: "/v2/chewy/product",
    methods: ["GET", "POST"],
    description:
      "Chewy Product. Read one Chewy product by URL or numeric id. The default mode is expert and returns the historical product cache. simple returns one snake_case product. Credit cost: 3 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Which product to read. A Chewy product URL such as https://www.chewy.com/purina-pro-plan-adult-sensitive-skin/dp/128666, or just the numeric id 128666. A search link, a keyword, or another website returns 400.",
      },
      {
        name: "mode",
        type: "string",
        required: false,
        description: "Which JSON to return. Default expert.",
        default: "expert",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          "Set to true to get the rendered HTML in result instead of JSON. Default false. The string false stays false and still returns JSON.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "chewy_search",
    title: "Chewy Search",
    path: "/v2/chewy/search",
    methods: ["GET", "POST"],
    description:
      "Chewy Search. Search Chewy by keyword or listing URL. The default mode is expert and returns the historical listing objects. simple returns short snake_case cards. Credit cost: 3 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "What to search for. A keyword such as salmon kibble, or a Chewy search or category link such as https://www.chewy.com/s?query=dog+food. A product link (a URL that contains /dp/) returns 400. Another website returns 400.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Which page to fetch, starting at 1. Leave this empty for page 1. If query is a listing link that already has page=2, this value replaces that page. In simple mode, pagination.page is this page and pagination.next is the next page URL or null.",
      },
      {
        name: "mode",
        type: "string",
        required: false,
        description: "Which JSON to return. Default expert.",
        default: "expert",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          "Set to true to get the rendered HTML in result instead of JSON. Default false. The string false stays false and still returns JSON.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "clearedjobs_job",
    title: "ClearedJobs Job",
    path: "/v2/clearedjobs/job",
    methods: ["GET", "POST"],
    description:
      "ClearedJobs Job. Fetch one cleared job by its URL or by a slug that ends in the numeric id. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. Job URL or slug ending in the numeric id. Example: analyst-washington-district-of-columbia-1902823.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "clearedjobs_search",
    title: "ClearedJobs Search",
    path: "/v2/clearedjobs/search",
    methods: ["GET", "POST"],
    description:
      "ClearedJobs Search. Search cleared jobs by keyword. Only the first HTML page is available, so pagination.next is null and page 2 returns 404. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. Keyword or a clearedjobs.net jobs URL. Example: analyst. A job URL returns 400.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Optional. Only page 1 is available. Example: 1. page=2 returns 404. pagination.next is always null.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "company",
    title: "Company Database",
    path: "/v2/company",
    methods: ["GET", "POST"],
    description:
      "Company Database. Retrieve comprehensive company data including financials, technologies, social profiles, and location by domain name. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "The domain name of the company to look up. Accepts multiple formats:",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "coolblue_product",
    title: "Coolblue Product",
    path: "/v2/coolblue/product",
    methods: ["GET", "POST"],
    description:
      "Coolblue Product. Read one Coolblue product by article id or product URL, in the region of that shop. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Product link, or the article number.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description: "Shop for a bare article number.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "coolblue_search",
    title: "Coolblue Search",
    path: "/v2/coolblue/search",
    methods: ["GET", "POST"],
    description:
      "Coolblue Search. Search Coolblue with a product keyword. Region defaults to Belgium. Also use nl or de. Page through product cards. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Search words, or a Coolblue listing link.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number, from 1.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description: "Shop, when query is words rather than a full link.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "copart_lot",
    title: "Copart Lot",
    path: "/v2/copart/lot",
    methods: ["GET", "POST"],
    description:
      "Copart Lot. Copart Lot API: retrieve structured auction lot data by lot number or URL. Specs, damage, bids, photos, yard location and sale status across regional Copart sites. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Copart lot number or full lot URL.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Regional Copart site when query is a lot number only. Defaults to US.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML page source as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "copart_search",
    title: "Copart Search",
    path: "/v2/copart/search",
    methods: ["GET", "POST"],
    description:
      "Copart Search. Copart Search API: search auction lots by keyword or URL across Copart regional sites. Returns lot listings and pagination. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Search keyword or full Copart search URL.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Copart regional site when query is a keyword or lot number only. Defaults to US.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number (default: 1).",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML page source as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "costco_product",
    title: "Costco Product",
    path: "/v2/costco/product",
    methods: ["GET", "POST"],
    description:
      "Costco Product. Costco Product API: fetch full product page data from a product ID or URL across regional Costco sites. Returns pricing, availability, ratings, images and breadcrumbs via browser rendering. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Costco product ID or full product URL.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Regional Costco site. Accepts a region code (us, fr, ca, uk, …) or full host (www.costco.fr). Defaults to US (www.costco.com) when omitted.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML page source as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "costco_search",
    title: "Costco Search",
    path: "/v2/costco/search",
    methods: ["GET", "POST"],
    description:
      "Costco Search. Costco Search API: search product listings by keyword or URL across 13 regional Costco sites. Returns prices, availability, review counts and pagination via browser rendering. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Search keyword or full regional search URL.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Regional Costco site. Accepts a region code (us, fr, ca, uk, …) or full host (www.costco.fr). Defaults to US (www.costco.com) when omitted.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "1-based page number override. Uses currentPage (most regions) or page (UK) when rebuilding pagination URLs.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML page source as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "crunchbase_company_info",
    title: "Crunchbase Company Info",
    path: "/v2/crunchbase/company/info",
    methods: ["GET", "POST"],
    description:
      "Crunchbase Company Info. Convert URLs into detailed Crunchbase profiles for immediate company insights. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: false,
        description:
          "Search for a company by its name, permalink, or full Crunchbase URL.",
      },
      {
        name: "domain",
        type: "string",
        required: false,
        description:
          "Perform a reverse lookup by domain name to find the associated Crunchbase company profile.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "crunchbase_event",
    title: "Crunchbase Event",
    path: "/v2/crunchbase/event",
    methods: ["GET", "POST"],
    description:
      "Crunchbase Event. Retrieve detailed Crunchbase event profiles with speakers, sponsors, exhibitors, and press timelines. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Retrieve event data using its Crunchbase permalink or full URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "crunchbase_funding_round",
    title: "Crunchbase Funding Round",
    path: "/v2/crunchbase/funding_round",
    methods: ["GET", "POST"],
    description:
      "Crunchbase Funding Round. Retrieve full details of a specific Crunchbase funding round including investors and press timeline. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "The permalink of the specific funding round to retrieve. This is the unique identifier found in the Crunchbase funding round URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "crunchbase_funding_rounds",
    title: "Crunchbase Funding Rounds",
    path: "/v2/crunchbase/funding_rounds",
    methods: ["GET", "POST"],
    description:
      "Crunchbase Funding Rounds. Monitor funding history and financial milestones of companies with Crunchbase data. Credit cost: 2 credits per call.",
    params: [
      {
        name: "days_since_announcement",
        type: "number",
        required: false,
        description: "Filter funding rounds announced within the last N days.",
        default: 1,
      },
      {
        name: "investment_type",
        type: "string",
        required: false,
        description: "Filter by funding round type. Accepted values:",
      },
      {
        name: "investor_identifiers",
        type: "string",
        required: false,
        description:
          "Filter rounds by a specific investor using their Crunchbase UUID.",
      },
      {
        name: "funded_organization_identifier",
        type: "string",
        required: false,
        description:
          "Filter rounds by a specific funded organization using their Crunchbase UUID.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "crunchbase_people_info",
    title: "Crunchbase People Info",
    path: "/v2/crunchbase/people/info",
    methods: ["GET", "POST"],
    description:
      "Crunchbase People Info. Retrieve detailed Crunchbase profiles for individuals including career history, investments, and board positions. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Search for a person by their name, Crunchbase permalink, or full Crunchbase profile URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "crunchbase_search",
    title: "Crunchbase Search",
    path: "/v2/crunchbase/search",
    methods: ["GET", "POST"],
    description:
      "Crunchbase Search. Search Crunchbase for companies and people by keyword and retrieve their profiles and Crunchbase identifiers. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "The search keyword or phrase to query across Crunchbase. Searches both organizations and people.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "cultura_product",
    title: "Cultura Product",
    path: "/v2/cultura/product",
    methods: ["GET", "POST"],
    description:
      "Cultura Product. Read one Cultura product from its URL or SKU. You get price, EAN, seller, condition, and stock wording. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Link of the Cultura product page.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "cultura_search",
    title: "Cultura Search",
    path: "/v2/cultura/search",
    methods: ["GET", "POST"],
    description:
      "Cultura Search. Search Cultura by keyword and page through books, games, and culture products. Cards include title, price, availability, and the product link. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Words to search for on Cultura, or the search page link.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page number, starting at 1. For example, 2 returns the next page of results.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "darty_product",
    title: "Darty Product",
    path: "/v2/darty/product",
    methods: ["GET", "POST"],
    description:
      "Darty Product. Read one Darty product sheet from a product URL or a Darty product id. You get price, brand, availability, rating, and specifications. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Product URL on www.darty.com. The path is under /nav/achat/ and ends in .html.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "darty_search",
    title: "Darty Search",
    path: "/v2/darty/search",
    methods: ["GET", "POST"],
    description:
      "Darty Search. Search Darty by keyword or search URL and page through the listing. Each card has title, price, brand, seller, and product link. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Keyword or a Darty search URL on www.darty.com.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "1-based page number. Defaults to 1. Page 2 returns the next 30 products.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "datasets_linkedin_company",
    title: "Dataset Linkedin Company",
    path: "/v2/datasets/linkedin/company",
    methods: ["POST"],
    description:
      "Dataset Linkedin Company. Query the LinkedIn company dataset with Elasticsearch Query DSL. Filter by name, domain, industry, headcount, and country. POST-only, 1 credit per row returned. Credit cost: 1 credit per row.",
    params: [
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "decathlon_product",
    title: "Decathlon Product",
    path: "/v2/decathlon/product",
    methods: ["GET", "POST"],
    description:
      "Decathlon Product. Read one Decathlon product from a product URL, a product path, or a keyword. A keyword uses the first search hit. Set region when the query does not already name the shop. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Product link, a /p/... or /products/... path, or a keyword. A keyword opens the first search hit. A search link returns 400.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Country shop when query is a keyword or a path. Default is fr. A full product link picks the shop.",
        default: "fr",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "Set to true to get the raw page body in result.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "decathlon_search",
    title: "Decathlon Search",
    path: "/v2/decathlon/search",
    methods: ["GET", "POST"],
    description:
      "Decathlon Search. Search a Decathlon shop with a keyword or a search URL. Choose the country with region, or let a full link pick the shop, then page through titles, prices, and product links. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Keyword, or a Decathlon search link.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Country shop. Default is fr. A full link in query picks the shop, and a conflicting region returns 400.",
        default: "fr",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number starting at 1.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "Set to true to get the raw HTML in result.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "digikey_product",
    title: "DigiKey Product",
    path: "/v2/digikey/product",
    methods: ["GET", "POST"],
    description:
      "DigiKey Product. Get a DigiKey product page: part numbers, manufacturer, price tiers, stock, images, datasheet and specs via browser rendering. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full DigiKey product detail URL, or relative path.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description: "DigiKey country TLD when query is a relative path.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return rendered HTML as {"result": "..."} instead of JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "digikey_search",
    title: "DigiKey Search",
    path: "/v2/digikey/search",
    methods: ["GET", "POST"],
    description:
      "DigiKey Search. Search DigiKey country sites by keyword or result/filter URL. Returns category branches or product listings with pagination via browser rendering. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Keyword, DigiKey result/filter URL, or relative path.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description: "DigiKey country TLD when query is not a full URL.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return rendered HTML as {"result": "..."} instead of JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "doaj_article",
    title: "DOAJ Article",
    path: "/v2/doaj/article",
    methods: ["GET", "POST"],
    description:
      "DOAJ Article. Fetch one DOAJ article by its id or by a doaj.org article URL. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. Article id or a doaj.org/article URL. Example: 000004687a3a411cb466625281f2ceb0.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "doaj_journal",
    title: "DOAJ Journal",
    path: "/v2/doaj/journal",
    methods: ["GET", "POST"],
    description:
      "DOAJ Journal. Fetch one DOAJ journal by ISSN, journal id, or a doaj.org toc URL. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. Journal ISSN, journal id, or a doaj.org/toc URL. Example: 2747-173X.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "doaj_search",
    title: "DOAJ Search",
    path: "/v2/doaj/search",
    methods: ["GET", "POST"],
    description:
      "DOAJ Search. Search DOAJ articles or journals. kind is article (default) or journal. Article ids and journal ISSNs are the detail keys. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. Keyword or a doaj.org search URL. Example: climate. An article or journal URL returns 400.",
      },
      {
        name: "kind",
        type: "string",
        required: false,
        description:
          "Optional. article or journal. Example: journal. Defaults to article.",
        default: "article",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Optional. Page number from 1. Example: 2. Defaults to 1. Each page has 10 records.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "domain_dnsbl",
    title: "Domain DNSBL",
    path: "/v2/domain/dnsbl",
    methods: ["GET", "POST"],
    description:
      "Domain DNSBL. Check if a domain or IP address is listed in DNS-based blacklists (DNSBL), with detailed provider-level detection and category information. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "A domain name or IP address to check against DNS-based blacklists (DNSBL).",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "domain_malicious",
    title: "Domain Malicious",
    path: "/v2/domain/malicious",
    methods: ["GET", "POST"],
    description:
      "Domain Malicious. Check if a domain or IP address has been flagged as malicious across multiple threat intelligence feeds, with source attribution. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "A domain name or IP address to check for malicious activity across multiple threat intelligence sources.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "domain_whois",
    title: "Domain Whois",
    path: "/v2/domain/whois",
    methods: ["GET", "POST"],
    description:
      "Domain Whois. Retrieve WHOIS registration data for any domain, including registration dates, registrar details, name servers, and contact information. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "A domain name for which you want to retrieve WHOIS registration information.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "domaincomau_property",
    title: "Domain.com.au Property",
    path: "/v2/domaincomau/property",
    methods: ["GET", "POST"],
    description:
      "Domain.com.au Property. Read one Domain.com.au listing from its URL. The response is a flat object with price, address, agency, and photos. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Domain listing URL. The path ends with the listing id.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "Optional. Default false.",
        default: false,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "domaincomau_search",
    title: "Domain.com.au Search",
    path: "/v2/domaincomau/search",
    methods: ["GET", "POST"],
    description:
      "Domain.com.au Search. Search Domain.com.au by suburb. mode is sale, rent, or sold. page starts at 1. Each card has a dollar price and a price label rebuilt from that amount. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Suburb with state and postcode, a location slug, or a Domain search URL.",
      },
      {
        name: "mode",
        type: "string",
        required: false,
        description: "sale, rent, or sold when query is a place.",
        default: "sale",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page from 1.",
        default: 1,
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "Optional. Default false.",
        default: false,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "duckduckgo_search",
    title: "DuckDuckGo Search",
    path: "/v2/duckduckgo/search",
    methods: ["GET", "POST"],
    description:
      "DuckDuckGo Search. Query DuckDuckGo via API and retrieve structured organic results with region and language. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Search query sent to DuckDuckGo Search.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number. Page 1 is the first page of results.",
        default: 1,
      },
      {
        name: "gl",
        type: "string",
        required: false,
        description: "Country code, for example us, fr, gb, de, jp.",
      },
      {
        name: "hl",
        type: "string",
        required: false,
        description: "Language code, for example en, fr, de, ja, zh.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "ebay_product",
    title: "eBay Product",
    path: "/v2/ebay/product",
    methods: ["GET", "POST"],
    description:
      "eBay Product. eBay Product API: one listing on a supported eBay site, by URL or item id (3 credits). Credit cost: 3 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Item id, or an item URL on a supported eBay site.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "When true, return raw HTML.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "ebay_search",
    title: "eBay Search",
    path: "/v2/ebay/search",
    methods: ["GET", "POST"],
    description:
      "eBay Search. eBay Search API: search listings on supported eBay sites. Returns price, seller, and pagination (3 credits). Credit cost: 3 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Keyword on www.ebay.com, or a search URL on a supported eBay site.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page number, sent as _pgn. Default 1 for a keyword. On a URL, the page already in the URL is kept when this is empty. Below 1 returns 400.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "When true, return raw HTML.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "elcorteingles_product",
    title: "El Corte Inglés Product",
    path: "/v2/elcorteingles/product",
    methods: ["GET", "POST"],
    description:
      "El Corte Inglés Product. El Corte Inglés Product API. Fetch a full product page from elcorteingles.es by URL or product id. Returns pricing, stock, images and identifiers via browser rendering. Credit cost: 3 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Product URL or product id (A… / MP_…).",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "elcorteingles_search",
    title: "El Corte Inglés Search",
    path: "/v2/elcorteingles/search",
    methods: ["GET", "POST"],
    description:
      "El Corte Inglés Search. El Corte Inglés Search API. Search product listings on elcorteingles.es by keyword or URL. Returns prices, brands, images and pagination via webunlocker. Credit cost: 3 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Search keyword or full El Corte Inglés search URL.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "1-based page number. Overrides /search-nwx/{page}/ when present in the URL (default: from URL or 1).",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "eleclerc_product",
    title: "E.Leclerc Product",
    path: "/v2/eleclerc/product",
    methods: ["GET", "POST"],
    description:
      "E.Leclerc Product. Read one E.Leclerc product by EAN or product URL. Pass store_id to get that store's price and stock. Another store returns a different price and stock. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "E.Leclerc product EAN or product page URL.",
      },
      {
        name: "store_id",
        type: "string",
        required: false,
        description:
          "E.Leclerc store sign code. This selects that store's price and stock.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "eleclerc_search",
    title: "E.Leclerc Search",
    path: "/v2/eleclerc/search",
    methods: ["GET", "POST"],
    description:
      "E.Leclerc Search. Search for products on E.Leclerc by keyword with optional store-specific filtering and pagination. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Search keyword or phrase to query on E.Leclerc.",
      },
      {
        name: "store_id",
        type: "string",
        required: false,
        description: "ID of a specific E.Leclerc store to search in.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number for paginated results.",
        default: 1,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "eleclerc_suggest",
    title: "E.Leclerc Suggest",
    path: "/v2/eleclerc/suggest",
    methods: ["GET", "POST"],
    description:
      "E.Leclerc Suggest. Get instant product autocomplete suggestions from E.Leclerc for a given keyword or EAN. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Search term or EAN to get product suggestions for.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "email_analyzes",
    title: "Email Analyzes",
    path: "/v2/email/analyzes",
    methods: ["GET", "POST"],
    description:
      "Email Analyzes. Analyze a domain to retrieve its email infrastructure. Microsoft 365 and Google Workspace domains, SPF records, and DNS configurations. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "The domain name you want to analyze for email infrastructure.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "email_finder",
    title: "Email Finder",
    path: "/v2/email/finder",
    methods: ["GET", "POST"],
    description:
      "Email Finder. Find verified professional email addresses by combining a person's full name with their company domain or company name. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Full name of the person whose professional email address you want to find.",
      },
      {
        name: "company_domain",
        type: "string",
        required: false,
        description:
          "The company's domain name. Multiple formats are accepted:",
      },
      {
        name: "company_name",
        type: "string",
        required: false,
        description: "The company name of the person you are looking for.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "email_verify",
    title: "Email Verify",
    path: "/v2/email/verify",
    methods: ["GET", "POST"],
    description:
      "Email Verify. Verify whether an email address is valid and deliverable, returning a clear status to prevent bounces and maintain list hygiene. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "The email address you want to verify.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "europages_company",
    title: "Europages Company",
    path: "/v2/europages/company",
    methods: ["GET", "POST"],
    description:
      "Europages Company. Europages company profile with address, supplier type and the products listed on the page (1 credit). Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Profile URL copied from a search card, or a slug.",
      },
      {
        name: "domain",
        type: "string",
        required: false,
        description:
          "Site when query is a slug. Same values as search. Default fr. Ignored when query is a URL.",
        default: "fr",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "europages_search",
    title: "Europages Search",
    path: "/v2/europages/search",
    methods: ["GET", "POST"],
    description:
      "Europages Search. Search Europages suppliers by keyword or category URL. Returns company cards and pagination (1 credit). Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Keyword, or a category / search URL on Europages.",
      },
      {
        name: "domain",
        type: "string",
        required: false,
        description:
          "Site of a keyword: fr (default), de, co.uk (en, uk, gb), es, it, nl, and the other Europages TLDs. Ignored when query is a URL. German uses /suche/.",
        default: "fr",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page from 1. Page 2 and after use /pg-N/. 30 companies per page.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "eventbrite_event",
    title: "Eventbrite Event",
    path: "/v2/eventbrite/event",
    methods: ["GET", "POST"],
    description:
      "Eventbrite Event. Get one Eventbrite event by detail URL or numeric id: venue, organizer, schedule, and description (1 credit). Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Event detail URL or numeric id.",
      },
      {
        name: "domain",
        type: "string",
        required: false,
        description:
          "Country TLD when query is a bare id (fr, com, es, com.mx, …). Ignored if query is a full URL.",
        default: "fr",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "eventbrite_search",
    title: "Eventbrite Search",
    path: "/v2/eventbrite/search",
    methods: ["GET", "POST"],
    description:
      "Eventbrite Search. Search Eventbrite events by keyword or paste a city/category URL. Returns event cards and pagination (1 credit). Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: false,
        description:
          "Keyword, or paste a full Eventbrite city / category / search URL.",
      },
      {
        name: "domain",
        type: "string",
        required: false,
        description:
          "Eventbrite TLD when query is a keyword (fr, com, es, com.mx, co.uk, …). Ignored if query is a full URL.",
        default: "fr",
      },
      {
        name: "location",
        type: "string",
        required: false,
        description:
          "Location slug such as france--paris (keyword searches only).",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "expedia_ad",
    title: "Expedia Ad",
    path: "/v2/expedia/ad",
    methods: ["GET", "POST"],
    description:
      "Expedia Ad. Fetch one Expedia hotel from its information URL: name, postal address, and amenity groups. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "An Expedia hotel information URL. The response is one flat hotel. hotel_id comes from .h{id}.Hotel-Information when that pattern is in the URL, and is null otherwise. A destination, a non-Expedia URL, or an empty value returns 400.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "expedia_flight",
    title: "Expedia Flight",
    path: "/v2/expedia/flight",
    methods: ["GET", "POST"],
    description:
      "Expedia Flight. Search Expedia flights by airport route and dates, or by a flight search URL. Each offer includes the airline, times, stops, and displayed price. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "A route or a full Expedia Flights-Search URL. Empty, a route without two airport codes, or a non-Expedia URL returns 400. A full URL is opened as given. price stays the label on the offer. pagination.next is null.",
      },
      {
        name: "departure_date",
        type: "string",
        required: false,
        description:
          "Departure as YYYY-MM-DD for a route. Omit it and the route uses 2026-11-15. A value that is not YYYY-MM-DD returns 400. Ignored when query is a full URL.",
      },
      {
        name: "return_date",
        type: "string",
        required: false,
        description:
          "Return date as YYYY-MM-DD. Omit it for a one-way trip. A value that is not YYYY-MM-DD returns 400. Ignored when query is a full URL.",
      },
      {
        name: "adults",
        type: "number",
        required: false,
        description:
          "Adult passengers for a route. Omit it and the request uses 1. Ignored when query is a full URL.",
      },
      {
        name: "cabin_class",
        type: "string",
        required: false,
        description:
          "Label copied onto every result as cabin_class. Omit it and each result uses economy. It does not add a cabin filter to the Expedia URL.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Host for a route. Omit it for www.expedia.com. Allowed: us, ca, uk, au, fr, de, es, it, nl, mx. Any other value returns 400. Ignored when query is a full URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "expedia_search",
    title: "Expedia Search",
    path: "/v2/expedia/search",
    methods: ["GET", "POST"],
    description:
      "Expedia Search. Execute a hotel search on Expedia using a direct search URL and receive structured hotel listings with prices, ratings, and availability. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "A valid Expedia hotel search URL. Copy the URL directly from your Expedia search results page.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "fashionphile_product",
    title: "Fashionphile Product",
    path: "/v2/fashionphile/product",
    methods: ["GET", "POST"],
    description:
      "Fashionphile Product. Load one Fashionphile product from a handle or a product URL. Keywords and search URLs belong on the search endpoint. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Product handle or a fashionphile.com product URL. The request reads products/{handle}.js and returns one flat product. price is the USD amount and price_display is that amount rebuilt as a dollar string.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          "Default false. true replaces the product object with result, the raw Shopify JSON text.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "fashionphile_search",
    title: "Fashionphile Search",
    path: "/v2/fashionphile/search",
    methods: ["GET", "POST"],
    description:
      "Fashionphile Search. Search Fashionphile by keywords, a search URL, a collection URL, or a products.json URL. A product handle or product URL belongs on the product endpoint. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Keywords, a Fashionphile search URL, a collection URL, or a products.json URL. Empty returns 400.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number starting at 1. Omit it for page 1.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          "Default false. true replaces results and pagination with result, the raw Shopify JSON text.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "finder_chewy_products",
    title: "Chewy Products Finder",
    path: "/v2/finder/chewy-products",
    methods: ["GET", "POST"],
    description:
      "Chewy Products Finder. Find Chewy product URLs by product name, ID, or any combination of filters to use in product detail and rendering API calls.",
    params: [
      {
        name: "search",
        type: "string",
        required: false,
        description:
          "Free-text search across product titles and IDs. Optional if at least one filter is provided.",
      },
      {
        name: "query",
        type: "string",
        required: false,
        description: "Legacy alias of search. Kept for backward compatibility.",
      },
      {
        name: "id",
        type: "string",
        required: false,
        description:
          "Filter by one or several internal product IDs. Provide a comma-separated list to match multiple IDs.",
      },
      {
        name: "domain",
        type: "string",
        required: false,
        description:
          "Filter by website domain. Comma-separated values are accepted.",
      },
      {
        name: "filter",
        type: "string",
        required: false,
        description:
          "Raw filter expression for advanced filtering. Combined with the shorthand filters using AND.",
      },
      {
        name: "limit",
        type: "number",
        required: false,
        description:
          "Maximum number of results to return. Default is 10, maximum is 100.",
        default: 10,
      },
      {
        name: "offset",
        type: "number",
        required: false,
        description: "Number of results to skip for pagination. Default is 0.",
        default: 0,
      },
      {
        name: "sort",
        type: "string",
        required: false,
        description:
          "Sort the results. Provide one or several attributes with :asc or :desc, comma-separated.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to return. Defaults to all fields.",
      },
      {
        name: "count",
        type: "boolean",
        required: false,
        description:
          "When true, the response is wrapped in an object containing the total estimated count plus the hits: { count, hits }. When false or omitted, returns the raw hits array.",
        default: false,
      },
    ],
  },
  {
    name: "finder_eleclerc_stores",
    title: "Eleclerc Stores Finder",
    path: "/v2/finder/eleclerc-stores",
    methods: ["GET", "POST"],
    description:
      "Eleclerc Stores Finder. Search Eleclerc stores by name or city to retrieve contact details, opening hours, and geolocation.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Filters stores based on a search string. The search is non-case-sensitive and returns all stores whose names contain the specified string.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "finder_google_countries",
    title: "Google Countries Finder",
    path: "/v2/finder/google-countries",
    methods: ["GET", "POST"],
    description:
      "Google Countries Finder. Search the list of Google-supported countries by name or country code to use in Google Search API requests.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Filters countries based on a search string. The search is non-case-sensitive and returns all countries whose names contain the specified string.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "finder_google_languages",
    title: "Google Languages Finder",
    path: "/v2/finder/google-languages",
    methods: ["GET", "POST"],
    description:
      "Google Languages Finder. Search the list of Google-supported languages by name to retrieve language codes for use in Google Search API requests.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Filters languages based on a search string. The search is non-case-sensitive and returns all languages whose names contain the specified string.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "finder_google_locations",
    title: "Google Locations Finder",
    path: "/v2/finder/google-locations",
    methods: ["GET", "POST"],
    description:
      "Google Locations Finder. Search Google-supported locations by name to retrieve location IDs and GPS coordinates for geo-targeted search API calls.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Restricts your search to locations that contain the supplied string.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "finder_leroymerlin_products",
    title: "Leroy Merlin Products Finder",
    path: "/v2/finder/leroymerlin-products",
    methods: ["GET", "POST"],
    description:
      "Leroy Merlin Products Finder. Find Leroy Merlin product URLs by product name, ID, or any combination of filters to use in product detail and rendering API calls.",
    params: [
      {
        name: "search",
        type: "string",
        required: false,
        description:
          "Free-text search across product titles and IDs. Optional if at least one filter is provided.",
      },
      {
        name: "query",
        type: "string",
        required: false,
        description: "Legacy alias of search. Kept for backward compatibility.",
      },
      {
        name: "id",
        type: "string",
        required: false,
        description:
          "Filter by one or several internal product IDs. Provide a comma-separated list to match multiple IDs.",
      },
      {
        name: "domain",
        type: "string",
        required: false,
        description:
          "Filter by website domain. Comma-separated values are accepted.",
      },
      {
        name: "filter",
        type: "string",
        required: false,
        description:
          "Raw filter expression for advanced filtering. Combined with the shorthand filters using AND.",
      },
      {
        name: "limit",
        type: "number",
        required: false,
        description:
          "Maximum number of results to return. Default is 10, maximum is 100.",
        default: 10,
      },
      {
        name: "offset",
        type: "number",
        required: false,
        description: "Number of results to skip for pagination. Default is 0.",
        default: 0,
      },
      {
        name: "sort",
        type: "string",
        required: false,
        description:
          "Sort the results. Provide one or several attributes with :asc or :desc, comma-separated.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to return. Defaults to all fields.",
      },
      {
        name: "count",
        type: "boolean",
        required: false,
        description:
          "When true, the response is wrapped in an object containing the total estimated count plus the hits: { count, hits }. When false or omitted, returns the raw hits array.",
        default: false,
      },
    ],
  },
  {
    name: "finder_leroymerlin_stores",
    title: "Leroy Merlin Stores Finder",
    path: "/v2/finder/leroymerlin-stores",
    methods: ["GET", "POST"],
    description:
      "Leroy Merlin Stores Finder. Search Leroy Merlin stores by name, city or postal code to retrieve their store ID, slug, address and store locator URL.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Filters Leroy Merlin stores based on a search string. The search is non-case-sensitive and matches store names, cities, postal codes and store slugs.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "finder_linkedin_industries",
    title: "LinkedIn Industries Finder",
    path: "/v2/finder/linkedin-industries",
    methods: ["GET", "POST"],
    description:
      "LinkedIn Industries Finder. Search LinkedIn industry taxonomy to retrieve industry IDs and hierarchies for use in LinkedIn API calls and data enrichment.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Restricts your search to industries that contain the supplied string.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "finder_mrbricolage_stores",
    title: "Mr.Bricolage Stores Finder",
    path: "/v2/finder/mrbricolage-stores",
    methods: ["GET", "POST"],
    description:
      "Mr.Bricolage Stores Finder. Search Mr.Bricolage stores by name, city or postal code to retrieve their store ID, slug, contact information and geolocation.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Filters Mr.Bricolage stores based on a search string. The search is non-case-sensitive and matches store names, cities and postal codes.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "fiverr_profile_info",
    title: "Fiverr Profile Info",
    path: "/v2/fiverr/profile/info",
    methods: ["GET", "POST"],
    description:
      "Fiverr Profile Info. Extract complete public profile data from any Fiverr seller, including gigs, ratings, reviews, skills, portfolio, and consultation pricing. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Fiverr profile URL of the seller you want to extract information from.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "fiverr_search",
    title: "Fiverr Search",
    path: "/v2/fiverr/search",
    methods: ["GET", "POST"],
    description:
      "Fiverr Search. Search Fiverr gigs using a direct search URL and receive paginated listings with seller information, gig titles, images, and seller levels. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "A Fiverr search URL for gigs.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "fnac_product",
    title: "Fnac Product",
    path: "/v2/fnac/product",
    methods: ["GET", "POST"],
    description:
      "Fnac Product. Read one Fnac product from its URL or product id. You get the price, brand, EAN, seller, and rating. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Product URL (/a{id} or /mp{id}) or the numeric Fnac id. A keyword or a search URL returns 400.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          "When true, returns the raw HTML instead of the parsed JSON.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "fnac_search",
    title: "Fnac Search",
    path: "/v2/fnac/search",
    methods: ["GET", "POST"],
    description:
      "Fnac Search. Search Fnac for a keyword or a SearchResult URL. Each card has the product id, name, price, seller, and stock. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Keyword or a Fnac SearchResult URL. A product URL returns 400.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page number, from 1. Default is 1. Page 2 is sent as PageIndex=2.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          "When true, returns the raw HTML instead of the parsed JSON.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "fotocasa_ad",
    title: "Fotocasa Property Ad",
    path: "/v2/fotocasa/ad",
    methods: ["GET", "POST"],
    description:
      "Fotocasa Property Ad. Get a full Fotocasa listing by URL: price, features, coordinates, energy certificate, images, and agency (browser rendering, 2 credits). Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Full Fotocasa ad URL (/comprar/ or /alquiler/, ending with /d).",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "fotocasa_search",
    title: "Fotocasa Property Search",
    path: "/v2/fotocasa/search",
    methods: ["GET", "POST"],
    description:
      "Fotocasa Property Search. Search Fotocasa listings by city or search URL. Returns prices, rooms, area, coordinates, and agency data via browser rendering (2 credits). Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "City name or full Fotocasa search URL.",
      },
      {
        name: "operation",
        type: "string",
        required: false,
        description: "Used when query is a city name (ignored for full URLs).",
        default: "buy",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number (1-based). Default: 1. Page 2 maps to /l/2.",
        default: 1,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "franchisedirect_franchise",
    title: "Franchise Direct Franchise",
    path: "/v2/franchisedirect/franchise",
    methods: ["GET", "POST"],
    description:
      "Franchise Direct Franchise. Read one Franchise Direct profile: cash requirement, franchise fee, investment range, and training. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. A Franchise Direct profile URL from search, or the same path beginning with /. A keyword or a listing URL returns 400.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "franchisedirect_search",
    title: "Franchise Direct Search",
    path: "/v2/franchisedirect/search",
    methods: ["GET", "POST"],
    description:
      "Franchise Direct Search. Search Franchise Direct listings by keyword or listing URL. Each card includes a USD cash figure and a numeric minimum. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. A keyword, or a Franchise Direct listing URL (search, directory, or category). A profile URL such as /coffee-franchises/coffeenow returns 400 on this endpoint. Send that URL to /v2/franchisedirect/franchise.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "fressnapf_product",
    title: "Fressnapf Product",
    path: "/v2/fressnapf/product",
    methods: ["GET", "POST"],
    description:
      "Fressnapf Product. Read a Fressnapf Germany product sheet from its URL. Returns sku, GTIN, euro price, unit price, and pack variants. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Product URL on www.fressnapf.de.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          "When true, return the raw HTML. The string false stays false.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "fressnapf_search",
    title: "Fressnapf Search",
    path: "/v2/fressnapf/search",
    methods: ["GET", "POST"],
    description:
      "Fressnapf Search. Search Fressnapf Germany by keyword or category URL. Returns product cards with euro prices and pagination. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Keyword or a fressnapf.de search or category URL.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number, starting at 1. Example: 2.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          "When true, return the raw HTML. The string false stays false.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "funda_property",
    title: "Funda Property",
    path: "/v2/funda/property",
    methods: ["GET", "POST"],
    description:
      "Funda Property. Read one Funda listing from its URL. You get the asking price, living area, and the feature groups. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Listing URL on www.funda.nl, under /detail/koop or /detail/huur.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "funda_search",
    title: "Funda Search",
    path: "/v2/funda/search",
    methods: ["GET", "POST"],
    description:
      "Funda Search. Search Funda by place. Set offering to koop for sale or huur for rent, then page the listings. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "City, area, or a Funda search URL.",
      },
      {
        name: "offering",
        type: "string",
        required: false,
        description: "Sale or rent when query is a place.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page from 1. Example: 2. Funda receives this as search_result=2. Page 1 and page 2 return different listings.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "g2_product_info",
    title: "G2 Product Info",
    path: "/v2/g2/product/info",
    methods: ["GET", "POST"],
    description:
      "G2 Product Info. Read a G2 product reviews page: rating, pricing, categories, alternatives, screenshots, and the reviews shown on the page. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Product slug or a www.g2.com product URL.",
      },
      {
        name: "nps_score",
        type: "number",
        required: false,
        description:
          "Keep reviews of one star rating, from 1 to 5. Omit it to read the unfiltered reviews page.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "Return the rendered HTML instead of the parsed product.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "github_user_info",
    title: "GitHub User Info",
    path: "/v2/github/user/info",
    methods: ["GET", "POST"],
    description:
      "GitHub User Info. Retrieve public GitHub user profile data including bio, company, location, follower count, repositories, and associated email addresses. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "A GitHub user identifier. Multiple formats are accepted:",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "glassdoor_company_info",
    title: "Glassdoor Company Info",
    path: "/v2/glassdoor/company/info",
    methods: ["GET", "POST"],
    description:
      "Glassdoor Company Info. Get one Glassdoor company profile by URL or employer id (2 credits). Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Company URL or employer id.\\n\\nExample:\\n\\n 1692882",
      },
      {
        name: "domain",
        type: "string",
        required: false,
        description: "Glassdoor TLD when query is not a full URL.",
        default: "fr",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "glassdoor_company_search",
    title: "Glassdoor Company Search",
    path: "/v2/glassdoor/company/search",
    methods: ["GET", "POST"],
    description:
      "Glassdoor Company Search. Search Glassdoor employers by keyword across country sites (2 credits). Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Employer keyword, or a full Glassdoor autocomplete URL.\\n\\nExample:\\n\\n airbus",
      },
      {
        name: "domain",
        type: "string",
        required: false,
        description: "Glassdoor TLD (fr, com, co.uk, …).",
        default: "fr",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "glassdoor_job_info",
    title: "Glassdoor Job Info",
    path: "/v2/glassdoor/job/info",
    methods: ["GET", "POST"],
    description:
      "Glassdoor Job Info. Get one Glassdoor job listing by URL or jl id (2 credits). Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Job listing URL or jl id.\\n\\nExample:\\n\\n 1010283388161",
      },
      {
        name: "domain",
        type: "string",
        required: false,
        description: "Glassdoor TLD when query is not a full URL.",
        default: "fr",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "glassdoor_job_search",
    title: "Glassdoor Job Search",
    path: "/v2/glassdoor/job/search",
    methods: ["GET", "POST"],
    description:
      "Glassdoor Job Search. Search Glassdoor jobs by keyword or SEO URL, with domain and filters (2 credits). Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Keyword or full Glassdoor job search URL.",
      },
      {
        name: "domain",
        type: "string",
        required: false,
        description: "Glassdoor TLD when query is not a full URL.",
        default: "fr",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number.",
      },
      {
        name: "sort_by",
        type: "string",
        required: false,
        description: "Glassdoor sortBy value (e.g. date_desc).",
      },
      {
        name: "remote",
        type: "boolean",
        required: false,
        description: "When true, set remoteWorkType=1.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "goodreads_book",
    title: "Goodreads Book",
    path: "/v2/goodreads/book",
    methods: ["GET", "POST"],
    description:
      "Goodreads Book. Read one Goodreads book by the numeric id from search, such as 44767458 for Dune. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. The numeric Goodreads book id from search, or a /book/show/ URL. A title is not accepted.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "goodreads_search",
    title: "Goodreads Search",
    path: "/v2/goodreads/search",
    methods: ["GET", "POST"],
    description:
      "Goodreads Search. Search Goodreads books by keyword. pagination.next is a Goodreads search URL for the following page. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. A book keyword, or a Goodreads search URL (the path contains /search or the query contains q=).",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Optional. Page number, starting at 1. Omitted or blank uses page 1. A value below 1 returns 400. When query is already a Goodreads search URL, this number replaces the page parameter in that URL.",
        default: 1,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "google_images",
    title: "Google Images",
    path: "/v2/google/images",
    methods: ["GET", "POST"],
    description:
      "Google Images. Google Images Scraper API – bringing the power of visual search to your fingertips. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "The image search query to execute on Google Images.",
      },
      {
        name: "google_domain",
        type: "string",
        required: false,
        description:
          "Google domain to use for the search. Defaults to google.com.",
        default: "google.com",
      },
      {
        name: "gl",
        type: "string",
        required: false,
        description:
          "Country to use for the Google search. Two-letter country code (e.g. us for the United States, uk for United Kingdom, or fr for France).",
        default: "us",
      },
      {
        name: "hl",
        type: "string",
        required: false,
        description:
          "Language to use for the Google search. Two or three-letter language code (e.g. en, es, fr), optionally followed by a region code (e.g. en-gb, es-419).",
        default: "en",
      },
      {
        name: "cr",
        type: "string",
        required: false,
        description:
          "Limit results to one or more countries. Use country{XX} with | as delimiter (e.g. countryFR|countryDE).",
      },
      {
        name: "lr",
        type: "string",
        required: false,
        description:
          "Limit results to one or more languages. Use lang_{xx} with | as delimiter (e.g. lang_fr|lang_de).",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page number for pagination. Images are returned in batches of 100 per page.",
        default: 1,
      },
      {
        name: "safe",
        type: "string",
        required: false,
        description:
          "Adult content filter. active enables Google SafeSearch; off disables it. Omit to use Google default.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "google_jobs",
    title: "Google Jobs",
    path: "/v2/google/jobs",
    methods: ["GET", "POST"],
    description:
      "Google Jobs. Extract job listings from Google Careers for enhanced recruitment and market analysis. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Job search term or keyword for querying Google job listings.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "google_maps",
    title: "Google Maps",
    path: "/v2/google/maps",
    methods: ["GET", "POST"],
    description:
      "Google Maps. Extract comprehensive company data from Google Maps for enhanced business insights. Credit cost: 3 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Business name or keyword to search for relevant data.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "google_news",
    title: "Google News",
    path: "/v2/google/news",
    methods: ["GET", "POST"],
    description:
      "Google News. Extract real-time news articles from Google News with advanced filtering by topic, location, language, and pagination. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "The news search query to execute on Google News. Supports standard Google search operators.",
      },
      {
        name: "location",
        type: "string",
        required: false,
        description:
          "City or region from which the news search should originate. Simulates a search performed from the specified location.",
      },
      {
        name: "uule",
        type: "string",
        required: false,
        description:
          "Google-encoded location string for precise geographic targeting. Use this instead of location when you need exact control.",
      },
      {
        name: "google_domain",
        type: "string",
        required: false,
        description:
          "Google domain to use for the search. Defaults to google.com.",
        default: "google.com",
      },
      {
        name: "gl",
        type: "string",
        required: false,
        description:
          "Country to use for the Google search. Two-letter country code (e.g. us for the United States, uk for United Kingdom, or fr for France).",
        default: "us",
      },
      {
        name: "hl",
        type: "string",
        required: false,
        description:
          "Language to use for the Google search. Two or three-letter language code (e.g. en, es, fr), optionally followed by a region code (e.g. en-gb, es-419).",
        default: "en",
      },
      {
        name: "cr",
        type: "string",
        required: false,
        description:
          "Limit results to one or more countries. Use country{XX} with | as delimiter (e.g. countryFR|countryDE).",
      },
      {
        name: "lr",
        type: "string",
        required: false,
        description:
          "Limit results to one or more languages. Use lang_{xx} with | as delimiter (e.g. lang_fr|lang_de).",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number of news results to retrieve.",
        default: 1,
      },
      {
        name: "num",
        type: "number",
        required: false,
        description: "Maximum number of results to return per page.",
        default: 10,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "google_search",
    title: "Google Search",
    path: "/v2/google/search",
    methods: ["GET", "POST"],
    description:
      "Google Search. Scrape real-time Google search results with organic listings, knowledge graph, related searches, and advanced filters. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "The search query to execute on Google. Supports all standard Google search operators.",
      },
      {
        name: "tbs",
        type: "string",
        required: false,
        description:
          "Advanced time-range and filter string for Google Search. Used to restrict results by recency.",
      },
      {
        name: "location",
        type: "string",
        required: false,
        description:
          "City or region from which the search should originate. Simulates a real user's search from the specified location.",
      },
      {
        name: "uule",
        type: "string",
        required: false,
        description:
          "Google-encoded location string for precise geographic targeting.",
      },
      {
        name: "google_domain",
        type: "string",
        required: false,
        description:
          "Google domain to use for the search. Defaults to google.com.",
        default: "google.com",
      },
      {
        name: "gl",
        type: "string",
        required: false,
        description:
          "Country to use for the Google search. Two-letter country code (e.g. us for the United States, uk for United Kingdom, or fr for France).",
        default: "us",
      },
      {
        name: "hl",
        type: "string",
        required: false,
        description:
          "Language to use for the Google search. Two or three-letter language code (e.g. en, es, fr), optionally followed by a region code (e.g. en-gb, es-419).",
        default: "en",
      },
      {
        name: "cr",
        type: "string",
        required: false,
        description:
          "Limit results to one or more countries. Use country{XX} with | as delimiter (e.g. countryFR|countryDE).",
      },
      {
        name: "lr",
        type: "string",
        required: false,
        description:
          "Limit results to one or more languages. Use lang_{xx} with | as delimiter (e.g. lang_fr|lang_de).",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number of search results to retrieve.",
        default: 1,
      },
      {
        name: "num",
        type: "number",
        required: false,
        description:
          "Maximum number of results to return per page (e.g. 10, 40, 100).",
        default: 10,
      },
      {
        name: "safe",
        type: "string",
        required: false,
        description:
          "Adult content filter. active enables Google SafeSearch; off disables it. Omit to use Google default.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "google_search_ai",
    title: "Google AI Mode",
    path: "/v2/google/search/ai",
    methods: ["GET", "POST"],
    description:
      "Google AI Mode. Scrape real-time Google AI Mode answers: text_blocks, references, and shopping_results. Credit cost: 3 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "The question or search query to send to Google AI Mode. Natural-language questions work best; advanced operators are also accepted.",
      },
      {
        name: "location",
        type: "string",
        required: false,
        description:
          "City or region from which the AI Mode search should originate. Simulates a real user searching from that location.",
      },
      {
        name: "uule",
        type: "string",
        required: false,
        description:
          "Google-encoded location string for precise geographic targeting. Mutually exclusive with location.",
      },
      {
        name: "google_domain",
        type: "string",
        required: false,
        description:
          "Google domain to use for the search. Defaults to google.com.",
        default: "google.com",
      },
      {
        name: "gl",
        type: "string",
        required: false,
        description:
          "Country to use for the Google search. Two-letter country code (e.g. us for the United States, uk for United Kingdom, or fr for France).",
        default: "us",
      },
      {
        name: "hl",
        type: "string",
        required: false,
        description:
          "Language to use for the Google search. Two or three-letter language code (e.g. en, es, fr), optionally followed by a region code (e.g. en-gb, es-419).",
        default: "en",
      },
      {
        name: "cr",
        type: "string",
        required: false,
        description:
          "Limit results to one or more countries. Use country{XX} with | as delimiter (e.g. countryFR|countryDE).",
      },
      {
        name: "lr",
        type: "string",
        required: false,
        description:
          "Limit results to one or more languages. Use lang_{xx} with | as delimiter (e.g. lang_fr|lang_de).",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "google_search_autocomplete",
    title: "Google Search Autocomplete",
    path: "/v2/google/search/autocomplete",
    methods: ["GET", "POST"],
    description:
      "Google Search Autocomplete. Retrieve real-time Google Search autocomplete suggestions for any query, with support for language and country localization. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "The partial or complete search query for which you want to retrieve autocomplete suggestions from Google.",
      },
      {
        name: "cp",
        type: "number",
        required: false,
        description:
          "Cursor position in the query string where autocomplete suggestions should be generated. Determines which part of the query is being completed.",
        default: 0,
      },
      {
        name: "google_domain",
        type: "string",
        required: false,
        description:
          "Google domain to use for the search. Defaults to google.com.",
        default: "google.com",
      },
      {
        name: "gl",
        type: "string",
        required: false,
        description:
          "Country to use for the Google search. Two-letter country code (e.g. us for the United States, uk for United Kingdom, or fr for France).",
        default: "us",
      },
      {
        name: "hl",
        type: "string",
        required: false,
        description:
          "Language to use for the Google search. Two or three-letter language code (e.g. en, es, fr), optionally followed by a region code (e.g. en-gb, es-419).",
        default: "en",
      },
      {
        name: "cr",
        type: "string",
        required: false,
        description:
          "Limit results to one or more countries. Use country{XX} with | as delimiter (e.g. countryFR|countryDE).",
      },
      {
        name: "lr",
        type: "string",
        required: false,
        description:
          "Limit results to one or more languages. Use lang_{xx} with | as delimiter (e.g. lang_fr|lang_de).",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "google_shopping",
    title: "Google Shopping",
    path: "/v2/google/shopping",
    methods: ["GET", "POST"],
    description:
      "Google Shopping. Search Google Shopping and retrieve structured product listings with prices, ratings, merchants, and product IDs. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Product search query on Google Shopping. Use a product name, brand, or category.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page number of Shopping results. Each page returns about 20 products. There is no num parameter.",
        default: 1,
      },
      {
        name: "location",
        type: "string",
        required: false,
        description:
          "City or region used to localize Shopping results. Simulates a search from that location and generates the UULE parameter automatically.",
      },
      {
        name: "uule",
        type: "string",
        required: false,
        description:
          "Google-encoded location string (UULE) for precise geo-targeting. Use location instead if you do not already have an encoded value.",
      },
      {
        name: "google_domain",
        type: "string",
        required: false,
        description:
          "Google domain to use for the search. Defaults to google.com.",
        default: "google.com",
      },
      {
        name: "gl",
        type: "string",
        required: false,
        description:
          "Country to use for the Google search. Two-letter country code (e.g. us for the United States, uk for United Kingdom, or fr for France).",
        default: "us",
      },
      {
        name: "hl",
        type: "string",
        required: false,
        description:
          "Language to use for the Google search. Two or three-letter language code (e.g. en, es, fr), optionally followed by a region code (e.g. en-gb, es-419).",
        default: "en",
      },
      {
        name: "cr",
        type: "string",
        required: false,
        description:
          "Limit results to one or more countries. Use country{XX} with | as delimiter (e.g. countryFR|countryDE).",
      },
      {
        name: "lr",
        type: "string",
        required: false,
        description:
          "Limit results to one or more languages. Use lang_{xx} with | as delimiter (e.g. lang_fr|lang_de).",
      },
      {
        name: "safe",
        type: "string",
        required: false,
        description:
          "Adult content filter. active enables Google SafeSearch; off disables it. Omit to use Google default.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "google_videos",
    title: "Google Videos",
    path: "/v2/google/videos",
    methods: ["GET", "POST"],
    description:
      "Google Videos. Scrape video results from Google Videos search including YouTube, Reddit, and other video platforms, with location and language support. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "The video search query to execute on Google Videos. Supports standard Google search operators.",
      },
      {
        name: "location",
        type: "string",
        required: false,
        description:
          "City or region from which the video search should originate.",
      },
      {
        name: "uule",
        type: "string",
        required: false,
        description:
          "Google-encoded location string for precise geographic targeting.",
      },
      {
        name: "google_domain",
        type: "string",
        required: false,
        description:
          "Google domain to use for the search. Defaults to google.com.",
        default: "google.com",
      },
      {
        name: "gl",
        type: "string",
        required: false,
        description:
          "Country to use for the Google search. Two-letter country code (e.g. us for the United States, uk for United Kingdom, or fr for France).",
        default: "us",
      },
      {
        name: "hl",
        type: "string",
        required: false,
        description:
          "Language to use for the Google search. Two or three-letter language code (e.g. en, es, fr), optionally followed by a region code (e.g. en-gb, es-419).",
        default: "en",
      },
      {
        name: "cr",
        type: "string",
        required: false,
        description:
          "Limit results to one or more countries. Use country{XX} with | as delimiter (e.g. countryFR|countryDE).",
      },
      {
        name: "lr",
        type: "string",
        required: false,
        description:
          "Limit results to one or more languages. Use lang_{xx} with | as delimiter (e.g. lang_fr|lang_de).",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number of video results to retrieve.",
        default: 1,
      },
      {
        name: "num",
        type: "number",
        required: false,
        description: "Maximum number of video results to return per page.",
        default: 10,
      },
      {
        name: "safe",
        type: "string",
        required: false,
        description:
          "Adult content filter. active enables Google SafeSearch; off disables it. Omit to use Google default.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "googleadstransparency_ad",
    title: "Google Ads Transparency Ad",
    path: "/v2/googleadstransparency/ad",
    methods: ["GET", "POST"],
    description:
      "Google Ads Transparency Ad. Get one Google Ads Transparency creative by URL: dates, impressions, platforms, regions, and the text read from the preview image (2 credits). Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Creative URL from search.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description: "ISO alpha-2. The matching region is returned first.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "googleadstransparency_search",
    title: "Google Ads Transparency Search",
    path: "/v2/googleadstransparency/search",
    methods: ["GET", "POST"],
    description:
      "Google Ads Transparency Search. Search the Google Ads Transparency Center by domain, advertiser, region, format, platform, and date. Returns creative cards and pagination (2 credits). Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Domain name, advertiser name, advertiser id, or a full Ads Transparency URL.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Country. ISO alpha-2 (FR), anywhere, or a Transparency region code (2250 for France, 250 is also accepted).",
      },
      {
        name: "domain",
        type: "string",
        required: false,
        description: "Domain filter. Used when query is not already a domain.",
      },
      {
        name: "advertiser_id",
        type: "string",
        required: false,
        description: "Advertiser id, AR followed by digits.",
      },
      {
        name: "format",
        type: "string",
        required: false,
        description: "Creative format.",
      },
      {
        name: "platform",
        type: "string",
        required: false,
        description: "Comma-separated surfaces.",
      },
      {
        name: "preset_date",
        type: "string",
        required: false,
        description: "Relative window.",
      },
      {
        name: "start_date",
        type: "string",
        required: false,
        description: "Inclusive start date, YYYY-MM-DD or YYYYMMDD.",
      },
      {
        name: "end_date",
        type: "string",
        required: false,
        description:
          "Inclusive end date, YYYY-MM-DD or YYYYMMDD. A single day uses the same value as start_date.",
      },
      {
        name: "topic",
        type: "string",
        required: false,
        description: "Ad topic. Default: commercial.",
        default: "commercial",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number, from 1 to 20. Default: 1.",
        default: 1,
      },
      {
        name: "per_page",
        type: "number",
        required: false,
        description: "Page size, from 1 to 100. Default: 40.",
        default: 40,
      },
      {
        name: "cursor",
        type: "string",
        required: false,
        description: "Opaque cursor copied from pagination.next.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "grainger_product",
    title: "Grainger Product",
    path: "/v2/grainger/product",
    methods: ["GET", "POST"],
    description:
      "Grainger Product. Get a Grainger US or Canada product page: SKU, brand, price, images, description and specs via browser rendering. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "SKU, full Grainger product URL, or relative /product/... path.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Grainger country when query is not a full URL (default: com).",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return rendered HTML as {"result": "..."} instead of JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "grainger_search",
    title: "Grainger Search",
    path: "/v2/grainger/search",
    methods: ["GET", "POST"],
    description:
      "Grainger Search. Search Grainger US or Canada by keyword, category URL or SKU. Returns product listings, category branches and suggestions via browser rendering. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Keyword, full Grainger search/category URL, category path, or SKU.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Grainger country when query is not a full URL (default: com).",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return rendered HTML as {"result": "..."} instead of JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "greenhouse_job",
    title: "Greenhouse Job",
    path: "/v2/greenhouse/job",
    methods: ["GET", "POST"],
    description:
      "Greenhouse Job. Fetch one Greenhouse job by board/id, such as discord/8806482002, or by a job-boards.greenhouse.io job URL. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. board/id or a job URL. Example: discord/8806482002 or https://job-boards.greenhouse.io/discord/jobs/8806482002.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "greenhouse_search",
    title: "Greenhouse Search",
    path: "/v2/greenhouse/search",
    methods: ["GET", "POST"],
    description:
      "Greenhouse Search. List jobs on a Greenhouse board. query is the board token, such as discord. keyword filters title and location. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. Board token or a job-boards.greenhouse.io board URL. Example: discord. A job URL returns 400.",
      },
      {
        name: "keyword",
        type: "string",
        required: false,
        description:
          "Optional. Case-insensitive filter on title and location. Example: policy. Omit it to list the whole board.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Optional. Page number from 1. Example: 2. Defaults to 1. Page size is 20.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "gsaelibrary_contract",
    title: "GSA eLibrary Contract",
    path: "/v2/gsaelibrary/contract",
    methods: ["GET", "POST"],
    description:
      "GSA eLibrary Contract. Read one GSA eLibrary contractor record from the contract URL returned by search. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. The contractorInfo.do URL from a search contract row. A contract number is also accepted, but GS-07F-0239T alone currently returns 404 because GSA needs the contractor name that search includes in the URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "gsaelibrary_search",
    title: "GSA eLibrary Search",
    path: "/v2/gsaelibrary/search",
    methods: ["GET", "POST"],
    description:
      "GSA eLibrary Search. Search GSA eLibrary for schedule, SIN, and contract rows by keyword or by a full search URL. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. A keyword, or a full search URL on gsaelibrary.gsa.gov. The URL must contain searchResults.do or searchText=.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "homestra_ad",
    title: "Homestra Ad",
    path: "/v2/homestra/ad",
    methods: ["GET", "POST"],
    description:
      "Homestra Ad. Retrieve detailed property listing data from Homestra, including price, size, location, features, photos, and nearby properties. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "A Homestra property URL or slug.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "homestra_search",
    title: "Homestra Search",
    path: "/v2/homestra/search",
    methods: ["GET", "POST"],
    description:
      "Homestra Search. Search Homestra property listings using a direct search URL with filters, returning structured results with prices, sizes, locations, and photos. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "A valid Homestra search URL with optional filters.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "huggingface_model",
    title: "Hugging Face Model",
    path: "/v2/huggingface/model",
    methods: ["GET", "POST"],
    description:
      "Hugging Face Model. Read one public Hugging Face model by an id such as google-bert/bert-base-uncased. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. A public model id (owner/name) or a huggingface.co model URL. Reserved site paths such as models, datasets, or spaces return 400.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "huggingface_search",
    title: "Hugging Face Search",
    path: "/v2/huggingface/search",
    methods: ["GET", "POST"],
    description:
      "Hugging Face Search. Search the public Hugging Face models API by keyword and follow pagination.next to the next cursor page. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. A model keyword, a huggingface.co/models URL, or the full pagination.next cursor URL from a previous page.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "idealista_property",
    title: "Idealista Property",
    path: "/v2/idealista/property",
    methods: ["GET", "POST"],
    description:
      "Idealista Property. Extract full property details from an Idealista listing URL, including price, specs, photos by room, features, energy rating, and advertiser data. Credit cost: 3 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full Idealista property detail URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "idealista_provinces",
    title: "Idealista Provinces",
    path: "/v2/idealista/provinces",
    methods: ["GET", "POST"],
    description:
      "Idealista Provinces. List the 50 Spanish provinces Idealista shows for homes for sale. Each row includes the sale search URL to pass as query to Idealista Search. Madrid is madrid-provincia. Credit cost: 3 credits per call.",
    params: [
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "idealista_search",
    title: "Idealista Search",
    path: "/v2/idealista/search",
    methods: ["GET", "POST"],
    description:
      "Idealista Search. Search Idealista listings from a search URL and retrieve prices, specs, photos, agency info, and pagination. Pass a province URL from /v2/idealista/provinces (results[].url) as query. Madrid is `https://www.idealista.com/venta-vivien… Credit cost: 3 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full Idealista search results URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "idealo_product",
    title: "Idealo Product",
    path: "/v2/idealo/product",
    methods: ["GET", "POST"],
    description:
      "Idealo Product. Get an Idealo product from Spain, France, or Germany. URL or product id. Offers, shipping, specs, and images via WebUnlocker (3 credits). Credit cost: 3 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full Idealo product URL, or a numeric product id.",
      },
      {
        name: "country",
        type: "string",
        required: false,
        description: "Region when query is a numeric product id.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "idealo_search",
    title: "Idealo Search",
    path: "/v2/idealo/search",
    methods: ["GET", "POST"],
    description:
      "Idealo Search. Search Idealo Spain, France, and Germany. Keyword or search URL. Prices, shipping, ratings, and pagination via WebUnlocker (3 credits). Credit cost: 3 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Keyword or full Idealo search URL for Spain, France, or Germany.",
      },
      {
        name: "country",
        type: "string",
        required: false,
        description: "Region when query is a keyword.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Search page. 2 appends ?page=2.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "ikea_product",
    title: "IKEA Product",
    path: "/v2/ikea/product",
    methods: ["GET", "POST"],
    description:
      "IKEA Product. Extract full IKEA product details from a product URL, including price, gallery, variants, dimensions, and breadcrumb. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full IKEA product page URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "ikea_search",
    title: "IKEA Search",
    path: "/v2/ikea/search",
    methods: ["GET", "POST"],
    description:
      "IKEA Search. Search IKEA products from a search URL and retrieve prices, ratings, dimensions, images, and pagination. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full IKEA search URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "immobilienscout24_property",
    title: "ImmobilienScout24 Property",
    path: "/v2/immobilienscout24/property",
    methods: ["GET", "POST"],
    description:
      "ImmobilienScout24 Property. Read one ImmobilienScout24 expose by URL or numeric id. You get cold rent or purchase price, address, and area. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "The expose id, or the expose page URL.",
        default: "168052908",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          "When true, return the raw HTML in result instead of the parsed expose.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "immobilienscout24_search",
    title: "ImmobilienScout24 Search",
    path: "/v2/immobilienscout24/search",
    methods: ["GET", "POST"],
    description:
      "ImmobilienScout24 Search. Search ImmobilienScout24 by region and property type. real_estate_type covers rent, buy, house, and land. Page with pagenumber. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Where to search.",
        default: "berlin/berlin",
      },
      {
        name: "real_estate_type",
        type: "string",
        required: false,
        description: "Rent or buy.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number, starting at 1.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          "When true, return the raw HTML in result instead of the parsed JSON.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "immoscout24ch_search",
    title: "ImmoScout24 Switzerland Search",
    path: "/v2/immoscout24ch/search",
    methods: ["GET", "POST"],
    description:
      "ImmoScout24 Switzerland Search. Search ImmoScout24.ch listings by city or search URL and retrieve the CHF price, rooms, living area, and address. Property pages are not available. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Swiss city or a full ImmoScout24.ch search URL.",
      },
      {
        name: "offer_type",
        type: "string",
        required: false,
        description: "rent or buy.",
      },
      {
        name: "property_type",
        type: "string",
        required: false,
        description: "apartment, house, or all.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page from 1.",
        default: 1,
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "Optional. Default false.",
        default: false,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "immowelt_property",
    title: "Immowelt Property",
    path: "/v2/immowelt/property",
    methods: ["GET", "POST"],
    description:
      "Immowelt Property. Extract full property details from an Immowelt listing URL, including price, specs, photo gallery, energy certificate, location, and contact data. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full Immowelt property detail URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "immowelt_search",
    title: "Immowelt Search",
    path: "/v2/immowelt/search",
    methods: ["GET", "POST"],
    description:
      "Immowelt Search. Search Immowelt listings from a search URL and retrieve prices, specs, photos, agency info, and pagination. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full Immowelt search URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "imoveisweb_property",
    title: "ImoveisWeb Property",
    path: "/v2/imoveisweb/property",
    methods: ["GET", "POST"],
    description:
      "ImoveisWeb Property. Read one Imobiliária Aquários listing from its imoveisweb.com.br URL. price_display is rebuilt from the asking amount. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Listing URL from search.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "Optional. Default false.",
        default: false,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "imoveisweb_search",
    title: "ImoveisWeb Search",
    path: "/v2/imoveisweb/search",
    methods: ["GET", "POST"],
    description:
      "ImoveisWeb Search. Search the Imobiliária Aquários catalog on imoveisweb.com.br. Pass a catalog name such as casas. price_display is rebuilt from the asking amount. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Catalog name or an ImoveisWeb results URL. This is Imobiliária Aquários, not ZonaProp.",
      },
      {
        name: "property_type",
        type: "string",
        required: false,
        description:
          "Optional catalog when query is not already a catalog name.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page from 1.",
        default: 1,
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "Optional. Default false.",
        default: false,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "indeed_company_info",
    title: "Indeed Company Info",
    path: "/v2/indeed/company/info",
    methods: ["GET", "POST"],
    description:
      "Indeed Company Info. Indeed Company Info API. Full employer profile by slug or URL. Browser rendering returns headcount, revenue, industry and FAQ or review blocks. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Indeed company slug or full /cmp/ URL.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML as {\\"result\\": \\"...\\"} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "indeed_company_search",
    title: "Indeed Company Search",
    path: "/v2/indeed/company/search",
    methods: ["GET", "POST"],
    description:
      "Indeed Company Search. Indeed Company Search API. Search fr.indeed.com employer profiles by keyword or URL. Browser rendering returns ratings, industry and profile links. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Company keyword or full Indeed companies search URL.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML as {\\"result\\": \\"...\\"} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "indeed_job_info",
    title: "Indeed Job Info",
    path: "/v2/indeed/job/info",
    methods: ["GET", "POST"],
    description:
      "Indeed Job Info. Indeed Job Info API. Fetch a full job posting by viewjob URL, sponsored click URL or job key. Browser rendering returns description and structured salary. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Indeed job URL, sponsored SERP click URL or 16-char jk job key.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML as {\\"result\\": \\"...\\"} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "indeed_job_salary",
    title: "Indeed Job Salary",
    path: "/v2/indeed/job/salary",
    methods: ["GET", "POST"],
    description:
      "Indeed Job Salary. Indeed Job Salary API. Career salary aggregates by job title slug or URL. Browser rendering returns median, percentiles and top paying cities. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Career salary slug, full /career/.../salaries URL or slug|location pair.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML as {\\"result\\": \\"...\\"} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "indeed_job_search",
    title: "Indeed Job Search",
    path: "/v2/indeed/job/search",
    methods: ["GET", "POST"],
    description:
      "Indeed Job Search. Indeed Job Search API. Search fr.indeed.com job listings by keyword or URL. Browser rendering returns cards with salary snippets and pagination. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Keyword, Indeed /jobs URL or SEO search URL on fr.indeed.com (default domain).",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "1-based page number (10 results per page). Default: 1.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML as {\\"result\\": \\"...\\"} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "inet_product",
    title: "Inet Product",
    path: "/v2/inet/product",
    methods: ["GET", "POST"],
    description:
      "Inet Product. Read one Inet.se product by article number or URL, including SEK price, specs, and warehouse stock. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Article number or product URL. Example: 4306287. A search link returns 400.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "Set to true to get the raw HTML in result.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "inet_search",
    title: "Inet Search",
    path: "/v2/inet/search",
    methods: ["GET", "POST"],
    description:
      "Inet Search. Search Inet.se by keyword or category. Prices are inc-VAT SEK, with the next page URL when more results exist. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "What to look for. A word such as ssd, or an Inet search or category link. A product link returns 400.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number, starting at 1. Page 2 uses page=2.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "Set to true to get the raw HTML in result.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "instagram_post_info",
    title: "Instagram Post Info",
    path: "/v2/instagram/post/info",
    methods: ["GET", "POST"],
    description:
      "Instagram Post Info. Monitor competitors and market trends by scraping Instagram posts for valuable data. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "The Instagram post or reel to retrieve. Accepts a full URL or a shortcode.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "instagram_user_info",
    title: "Instagram User Info",
    path: "/v2/instagram/user/info",
    methods: ["GET", "POST"],
    description:
      "Instagram User Info. Gather user insights efficiently from Instagram for targeted marketing strategies. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "The Instagram user to look up. Accepts a full profile URL or a username.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "intermarche_product",
    title: "Intermarché Product",
    path: "/v2/intermarche/product",
    methods: ["GET", "POST"],
    description:
      "Intermarché Product. Get an Intermarché product sheet for a store (shop_id). Try an EAN or product URL with shop_id=11301. 3 credits per call. Credit cost: 3 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full Intermarché product URL, or an EAN barcode.",
      },
      {
        name: "shop_id",
        type: "string",
        required: true,
        description:
          "Intermarché store id. Resolve a city with the [Stores Finder](https://www.piloterr.com/library/finder-intermarche-stores) (for example query=Paris).",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "intermarche_search",
    title: "Intermarché Search",
    path: "/v2/intermarche/search",
    methods: ["GET", "POST"],
    description:
      "Intermarché Search. Search Intermarché products for a store (shop_id). Try query=lait and shop_id=11301. 3 credits per call. Credit cost: 3 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Search keyword or full Intermarché search URL.",
      },
      {
        name: "shop_id",
        type: "string",
        required: true,
        description:
          "Intermarché store id. Resolve a city with the [Stores Finder](https://www.piloterr.com/library/finder-intermarche-stores) (for example query=Paris).",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page number starting at 1. Use pagination.total_pages from a previous response to iterate.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "intersport_product",
    title: "Intersport Product",
    path: "/v2/intersport/product",
    methods: ["GET", "POST"],
    description:
      "Intersport Product. Read one Intersport product from its URL. You get price, brand, and the product details. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Product URL on intersport.fr, or a root-relative path ending in -p-{id}.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, returns the raw HTML instead of the parsed JSON. The response shape is {"result": "<html>..."}. Default false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "intersport_search",
    title: "Intersport Search",
    path: "/v2/intersport/search",
    methods: ["GET", "POST"],
    description:
      "Intersport Search. Search Intersport by keyword and page the sports grid. Cards include title, price, and product link. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Keyword or an intersport.fr listing URL. A product URL returns 400.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page number, from 1. Default is 1. Intersport's page query is zero-based, so page 2 is sent as page=1.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, returns the raw HTML instead of the parsed JSON. The response shape is {"result": "<html>..."}. Default false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "jamesedition_property",
    title: "JamesEdition Property",
    path: "/v2/jamesedition/property",
    methods: ["GET", "POST"],
    description:
      "JamesEdition Property. Read one JamesEdition listing from its URL. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. JamesEdition listing URL, for example https://www.jamesedition.com/real_estate/munich-germany/alpine-panorama-above-lake-starnberg-new-build-project-near-munich-17793477. A keyword is rejected.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "jamesedition_search",
    title: "JamesEdition Search",
    path: "/v2/jamesedition/search",
    methods: ["GET", "POST"],
    description:
      "JamesEdition Search. Search JamesEdition luxury homes by keyword or by a results URL. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. Keyword, for example villa, or a JamesEdition results URL such as https://www.jamesedition.com/real_estate/france. A single listing URL is rejected.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Optional. Page number starting at 1. Example: 2. Omitted means page 1. A page already present in a results URL is kept when this is omitted or 1.",
        default: 1,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "kick_user_info",
    title: "Kick User Info",
    path: "/v2/kick/user/info",
    methods: ["GET", "POST"],
    description:
      "Kick User Info. Retrieve complete public channel data from Kick including streamer profile, follower count, live status, and recent categories. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "The Kick channel to look up. Accepts a full channel URL or a username/slug.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "kijiji_ad",
    title: "Kijiji Ad",
    path: "/v2/kijiji/ad",
    methods: ["GET", "POST"],
    description:
      "Kijiji Ad. Read one Kijiji ad from its id or URL. You get the asking price, the title, and the city. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full Kijiji listing URL or the numeric listing id.",
      },
      {
        name: "language",
        type: "string",
        required: false,
        description:
          "Locale sent to Kijiji as the siteLocale cookie. en sets en-CA and prints $20. fr sets fr-CA and prints 20 $ on the same ad.",
        default: "en",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "kijiji_search",
    title: "Kijiji Search",
    path: "/v2/kijiji/search",
    methods: ["GET", "POST"],
    description:
      "Kijiji Search. Search Kijiji with a results URL or a city and category. Language can be English or French. Page through classified ads. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Keyword or full Kijiji results URL.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Results page, starting at 1. Page 2 of the City of Toronto bikes search returns a different set of listing ids. When page stays at 1, a page-N segment already present in the URL is kept.",
      },
      {
        name: "language",
        type: "string",
        required: false,
        description:
          "Locale sent to Kijiji as the siteLocale cookie. en sets en-CA. fr sets fr-CA. French cards print prices like 10,00 $.",
        default: "en",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "kroger_product",
    title: "Kroger Product",
    path: "/v2/kroger/product",
    methods: ["GET", "POST"],
    description:
      "Kroger Product. Read one Kroger product by UPC. The sheet uses the same default store as search. You get the shelf price and the previous price when Kroger shows one. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Kroger product URL or UPC.",
      },
      {
        name: "location_id",
        type: "string",
        required: false,
        description:
          "Ignored. Prices stay on the default Rolla store, 02100537 (Kroger, 605 W 4th St, Rolla, MO 65401). The response location_id is the store that was actually priced.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "When true, return rendered HTML instead of JSON.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "kroger_search",
    title: "Kroger Search",
    path: "/v2/kroger/search",
    methods: ["GET", "POST"],
    description:
      "Kroger Search. Search Kroger groceries by keyword and page the results. Prices come from the default pickup store returned in the response. A location id you pass is not applied. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Keyword or a full Kroger search URL.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number, 1-based.",
      },
      {
        name: "location_id",
        type: "string",
        required: false,
        description:
          "Ignored. Prices stay on the default Rolla store, 02100537 (Kroger, 605 W 4th St, Rolla, MO 65401). The response location_id is the store that was actually priced.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "When true, return rendered HTML instead of JSON.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "lamudi_ad",
    title: "Lamudi Ad",
    path: "/v2/lamudi/ad",
    methods: ["GET", "POST"],
    description:
      "Lamudi Ad. Get a full Lamudi listing by URL: price, area, amenities, coordinates, images, and agent (browser rendering, 2 credits). Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Full Lamudi listing URL. Accepts lamudi.com.ph (/property/) and lamudi.co.id (/properti/).",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "lamudi_search",
    title: "Lamudi Search",
    path: "/v2/lamudi/search",
    methods: ["GET", "POST"],
    description:
      "Lamudi Search. Search Lamudi Philippines and Indonesia listings. Pass a search URL in query, or use location and filters. Prices, area, rooms, tags, and pagination via browser rendering (2 credits). Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: false,
        description:
          "Full Lamudi search URL. Used first when set. Location and path filters are ignored.",
      },
      {
        name: "location",
        type: "string",
        required: false,
        description:
          "City or district. Used when query is empty. Builds a Philippines URL (lamudi.com.ph). For Indonesia, pass a search URL in query.",
      },
      {
        name: "operation",
        type: "string",
        required: false,
        description: "Transaction type. Used when query is empty.",
        default: "sale",
      },
      {
        name: "property_type",
        type: "string",
        required: false,
        description:
          "Property type. Used when query is empty. Maps to Lamudi slugs (condominium → /condo/, land → /lot/).",
      },
      {
        name: "min_price",
        type: "number",
        required: false,
        description: "Minimum asking price in PHP or IDR.",
      },
      {
        name: "max_price",
        type: "number",
        required: false,
        description: "Maximum asking price in PHP or IDR.",
      },
      {
        name: "min_bedrooms",
        type: "number",
        required: false,
        description: "Minimum bedroom count.",
      },
      {
        name: "max_bedrooms",
        type: "number",
        required: false,
        description: "Maximum bedroom count.",
      },
      {
        name: "min_bathrooms",
        type: "number",
        required: false,
        description: "Minimum bathroom count.",
      },
      {
        name: "min_area",
        type: "number",
        required: false,
        description: "Minimum area in m².",
      },
      {
        name: "max_area",
        type: "number",
        required: false,
        description: "Maximum area in m².",
      },
      {
        name: "sort",
        type: "string",
        required: false,
        description: "Sort order.",
        default: "relevance",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "leboncoin_ad",
    title: "Leboncoin Ad",
    path: "/v2/leboncoin/ad",
    methods: ["GET", "POST"],
    description:
      "Leboncoin Ad. Extract full details from a Leboncoin ad including price, location, attributes, seller info, and images. Returns structured JSON by default, or raw HTML on demand. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Leboncoin ad ID or full ad URL. Both formats are accepted regardless of return_page_source.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "Controls the response format.",
        default: false,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "leboncoin_search",
    title: "Leboncoin Search",
    path: "/v2/leboncoin/search",
    methods: ["GET", "POST"],
    description:
      "Leboncoin Search. Scrape Leboncoin search results or category pages by URL, returning paginated listings with price, location, and attributes. Returns structured JSON. return_page_source is deprecated and returns 400. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Full Leboncoin search or category URL. Both keyword searches and category browse URLs are supported.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "Deprecated. Sending true returns 400.",
        default: false,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "leboncoin_search_api",
    title: "Leboncoin Search API",
    path: "/v2/leboncoin/search_api",
    methods: ["POST"],
    description:
      "Leboncoin Search API. Search Leboncoin listings via structured POST API with advanced filters for category, location, price range, seller type, and sorting. Credit cost: 1 credit per call.",
    params: [
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "lenovo_product",
    title: "Lenovo Product",
    path: "/v2/lenovo/product",
    methods: ["GET", "POST"],
    description:
      "Lenovo Product. Extract a Lenovo product page by URL: id, name, price, currency, availability, images, and description (browser rendering, 2 credits). Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Full Lenovo product URL (must contain /p/). Bare part numbers are rejected.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "lenovo_search",
    title: "Lenovo Search",
    path: "/v2/lenovo/search",
    methods: ["GET", "POST"],
    description:
      "Lenovo Search. Search Lenovo products by keyword or listing URL. Returns product id, price, currency, series, and availability via browser rendering (2 credits). Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Keyword or full Lenovo search / category URL.",
      },
      {
        name: "locale",
        type: "string",
        required: false,
        description:
          "Store locale when query is a keyword (ignored for full URLs).",
        default: "fr/fr",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "leroymerlin_product",
    title: "Leroy Merlin Product",
    path: "/v2/leroymerlin/product",
    methods: ["GET", "POST"],
    description:
      "Leroy Merlin Product. Live Leroy Merlin product detail for France and Romania from a URL or identifier: offers, currency, images, features and store context. Credit cost: 3 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Full Leroy Merlin product URL, or an identifier (SKU / EAN / text).",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Leroy Merlin country when query is a keyword or identifier (default: fr). Ignored when query is a full Leroy Merlin URL (country is detected from the domain).",
      },
      {
        name: "store_id",
        type: "string",
        required: false,
        description:
          "Optional store id for local offer context (prices, stock, deliveries). Must exist for the active region. Returns 400 when unknown.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When set to true, returns the raw HTML of the product page instead of the parsed JSON payload. Useful for debugging or custom parsing. The response shape is {"return": "<html>..."}. Defaults to false.',
        default: false,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "leroymerlin_search",
    title: "Leroy Merlin Search",
    path: "/v2/leroymerlin/search",
    methods: ["GET", "POST"],
    description:
      "Leroy Merlin Search. Live Leroy Merlin search across France and Romania: title, URL, price, currency, brand, seller, rating and pagination. Credit cost: 3 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Search keyword, SKU/EAN, or full Leroy Merlin search URL.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Leroy Merlin country when query is a keyword or identifier (default: fr). Ignored when query is a full Leroy Merlin URL (country is detected from the domain).",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "1-based page number for pagination. Defaults to 1 when omitted. Use the pagination.total_pages returned by a previous call to iterate.",
      },
      {
        name: "store_id",
        type: "string",
        required: false,
        description:
          "Optional store id for local prices and availability. Must exist for the active region (FR stores with region=fr, RO stores with region=ro). Returns 400 when unknown.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When set to true, returns the raw HTML of the page instead of the parsed JSON payload. Useful for debugging or custom parsing. The response shape is {"return": "<html>..."}. Defaults to false.',
        default: false,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "lidl_product",
    title: "Lidl Product",
    path: "/v2/lidl/product",
    methods: ["GET", "POST"],
    description:
      "Lidl Product. Lidl Product API: fetch full product page data from a Lidl URL or ERP id. Returns pricing, images, description, availability and category via Nuxt SSR parsing. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Lidl product URL or ERP id.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Target country when query is an ERP id only (default: fr). Ignored for full product URLs.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML page source as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "lidl_search",
    title: "Lidl Search",
    path: "/v2/lidl/search",
    methods: ["GET", "POST"],
    description:
      "Lidl Search. Lidl Search API: search product listings by keyword or URL across Lidl online shops in 27 countries. Parses Nuxt SSR payload from HTML; returns prices, ratings, brand and pagination. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Search keyword or full Lidl search URL.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description: "Target country when query is a keyword (default: fr).",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "1-based page number (default: 1). Lidl paginates by offset (48 items per page).",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML page source as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "linkedin_company_info",
    title: "LinkedIn Company Info",
    path: "/v2/linkedin/company/info",
    methods: ["GET", "POST"],
    description:
      "LinkedIn Company Info. LinkedIn Company Info API. Fetch firmographics by LinkedIn slug, URL, company ID, or reverse domain lookup (guideflow.com). Industry, headcount, HQ, posts, and more. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: false,
        description:
          "LinkedIn company identifier when you already know the page.",
      },
      {
        name: "domain",
        type: "string",
        required: false,
        description:
          "Company website domain for reverse lookup when you do not have the LinkedIn URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "linkedin_job_count",
    title: "LinkedIn Job Count",
    path: "/v2/linkedin/job/count",
    methods: ["GET", "POST"],
    description:
      "LinkedIn Job Count. Obtain real-time job counts on LinkedIn by industry, region, and role for strategic planning. Credit cost: 1 credit per call.",
    params: [
      {
        name: "keyword",
        type: "string",
        required: false,
        description: "Job title or keyword to count matching postings.",
      },
      {
        name: "experience_level",
        type: "string",
        required: false,
        description: "Filter by seniority level.",
      },
      {
        name: "job_type",
        type: "string",
        required: false,
        description: "Filter by employment type.",
      },
      {
        name: "when",
        type: "string",
        required: false,
        description: "Filter by posting recency.",
      },
      {
        name: "flexibility",
        type: "string",
        required: false,
        description: "Filter by work arrangement.",
      },
      {
        name: "distance",
        type: "number",
        required: false,
        description:
          "Maximum distance radius (in miles) from the target location (requires geo_id).",
      },
      {
        name: "geo_id",
        type: "string",
        required: false,
        description: "LinkedIn geo ID of the target location.",
      },
      {
        name: "company_id",
        type: "string",
        required: false,
        description:
          "LinkedIn numeric company ID to restrict the count to jobs posted by a specific company.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "linkedin_job_info",
    title: "LinkedIn Job Info",
    path: "/v2/linkedin/job/info",
    methods: ["GET", "POST"],
    description:
      "LinkedIn Job Info. Dive into LinkedIn job data and trends for in-depth labor market insights. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "The LinkedIn job posting to retrieve. Accepts a numeric job ID or a full job posting URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "linkedin_job_search",
    title: "LinkedIn Job Search",
    path: "/v2/linkedin/job/search",
    methods: ["GET", "POST"],
    description:
      "LinkedIn Job Search. Experience advanced job data extraction from LinkedIn, enhancing your recruitment strategy. Credit cost: 1 credit per call.",
    params: [
      {
        name: "keyword",
        type: "string",
        required: false,
        description: "Job title or keyword to search for.",
      },
      {
        name: "experience_level",
        type: "string",
        required: false,
        description: "Filter by seniority level.",
      },
      {
        name: "job_type",
        type: "string",
        required: false,
        description: "Filter by employment type.",
      },
      {
        name: "when",
        type: "string",
        required: false,
        description: "Filter by posting date recency.",
      },
      {
        name: "flexibility",
        type: "string",
        required: false,
        description: "Filter by work arrangement.",
      },
      {
        name: "distance",
        type: "number",
        required: false,
        description:
          "Maximum radius in miles from the target location (requires geo_id).",
      },
      {
        name: "geo_id",
        type: "string",
        required: false,
        description:
          "LinkedIn geo ID for the target location. Default is 92000000 (worldwide).",
        default: "92000000",
      },
      {
        name: "company_id",
        type: "string",
        required: false,
        description:
          "LinkedIn numeric company ID to filter results to jobs posted by a specific company.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page number for paginating through results. Default is 1. Each page returns up to 25 job listings.",
        default: 1,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "linkedin_job_suggest",
    title: "LinkedIn Job Suggest",
    path: "/v2/linkedin/job/suggest",
    methods: ["GET", "POST"],
    description:
      "LinkedIn Job Suggest. Get personalized job suggestions based on keywords or locations to streamline your job search. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "The keyword prefix to search for job title suggestions or location names.",
      },
      {
        name: "location",
        type: "boolean",
        required: false,
        description:
          "Set to true to receive location (geo) suggestions instead of keyword suggestions.",
        default: false,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "linkedin_post_info",
    title: "LinkedIn Post Info",
    path: "/v2/linkedin/post/info",
    methods: ["GET", "POST"],
    description:
      "LinkedIn Post Info. Simplify LinkedIn post retrieval with our efficient API for enhanced content analysis. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "The LinkedIn post to retrieve. Accepts a numeric post ID or a full post URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "linkedin_product_info",
    title: "LinkedIn Product Info",
    path: "/v2/linkedin/product/info",
    methods: ["GET", "POST"],
    description:
      "LinkedIn Product Info. Gain competitive insights with detailed LinkedIn product information for strategic advantage. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "The full LinkedIn product page URL to retrieve.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "linkedin_profile_info",
    title: "LinkedIn Profile Info",
    path: "/v2/linkedin/profile/info",
    methods: ["GET", "POST"],
    description:
      "LinkedIn Profile Info. Streamline recruitment and business development by extracting valuable LinkedIn profile insights. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "The LinkedIn profile to retrieve. Accepts a username, full profile URL, or numeric member ID.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "linkedinadlibrary_ad",
    title: "LinkedIn Ad Library Ad",
    path: "/v2/linkedinadlibrary/ad",
    methods: ["GET", "POST"],
    description:
      "LinkedIn Ad Library Ad. Get one LinkedIn Ad Library creative by URL or id: copy, CTA, payer, impressions, and targeting (2 credits). Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Ad id or detail URL from search.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "linkedinadlibrary_search",
    title: "LinkedIn Ad Library Search",
    path: "/v2/linkedinadlibrary/search",
    methods: ["GET", "POST"],
    description:
      "LinkedIn Ad Library Search. Search the LinkedIn Ad Library by advertiser, keyword, country, and date. Returns ad cards and pagination (2 credits). Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: false,
        description:
          "Full LinkedIn Ad Library search URL, or a keyword when account_owner is empty.",
      },
      {
        name: "account_owner",
        type: "string",
        required: false,
        description: "Advertiser / company name filter (accountOwner).",
      },
      {
        name: "keyword",
        type: "string",
        required: false,
        description: "Keyword filter on ad copy.",
      },
      {
        name: "countries",
        type: "string",
        required: false,
        description: "Comma-separated ISO country codes, or ALL.",
      },
      {
        name: "date_option",
        type: "string",
        required: false,
        description:
          "Date window: last-30-days, current-month, current-year, last-year, custom-date-range.",
      },
      {
        name: "start_date",
        type: "string",
        required: false,
        description:
          "Start date YYYY-MM-DD when date_option=custom-date-range.",
      },
      {
        name: "end_date",
        type: "string",
        required: false,
        description: "End date YYYY-MM-DD when date_option=custom-date-range.",
      },
      {
        name: "cursor",
        type: "string",
        required: false,
        description: "Opaque cursor from pagination.cursor / pagination.next.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "loopnet_property",
    title: "LoopNet Property",
    path: "/v2/loopnet/property",
    methods: ["GET", "POST"],
    description:
      "LoopNet Property. Read one LoopNet commercial listing from its URL. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. LoopNet listing URL from search, for example https://www.loopnet.com/Listing/484-Amsterdam-Ave-New-York-NY/31379002/. A keyword is rejected.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "loopnet_search",
    title: "LoopNet Search",
    path: "/v2/loopnet/search",
    methods: ["GET", "POST"],
    description:
      "LoopNet Search. Search LoopNet commercial listings by city or by a results URL. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. City and state, for example New York, NY, or a LoopNet search URL such as https://www.loopnet.com/search/commercial-real-estate/new-york-ny/for-sale/. A listing URL is rejected.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Optional. Page number starting at 1. Example: 2. Omitted means page 1. A page already present in a search URL is kept when this is omitted or 1.",
        default: 1,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "maersk_tracking",
    title: "Maersk Tracking",
    path: "/v2/maersk/tracking",
    methods: ["GET", "POST"],
    description:
      "Maersk Tracking. Track a Maersk container or BOL: origin, destination, current milestone and full transport-plan events via browser rendering. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Container / BOL tracking number, or full Maersk tracking URL.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the rendered HTML as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "manomano_product",
    title: "ManoMano Product",
    path: "/v2/manomano/product",
    methods: ["GET", "POST"],
    description:
      "ManoMano Product. Read a ManoMano product URL. The body is the product page: brand and seller are objects, and the current price is price.primary_price.amount_with_vat. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full ManoMano product page URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "manomano_product_offer",
    title: "ManoMano Product Offer",
    path: "/v2/manomano/product/offer",
    methods: ["GET", "POST"],
    description:
      "ManoMano Product Offer. List the other sellers for a ManoMano product id. Each offer adds price and price_display on top of the site offer. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Numeric ManoMano product id from the product endpoint.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description: "ManoMano country. FR, GB, DE, ES, or IT. Default FR.",
        default: "FR",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "manomano_search",
    title: "ManoMano Search",
    path: "/v2/manomano/search",
    methods: ["GET", "POST"],
    description:
      "ManoMano Search. Read a ManoMano category URL or keyword. Each card keeps the site fields and adds prices.main, brand_name, and image_fullpath. pagination.next is a boolean. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "ManoMano category URL or keyword. A keyword is opened on manomano.fr.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "mascus_ad",
    title: "Mascus Ad",
    path: "/v2/mascus/ad",
    methods: ["GET", "POST"],
    description:
      "Mascus Ad. Get full details for a Mascus used equipment listing: specs, price, seller and description. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Full Mascus listing URL. Usually taken from results[].url in search.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "mascus_search",
    title: "Mascus Search",
    path: "/v2/mascus/search",
    methods: ["GET", "POST"],
    description:
      "Mascus Search. Search used equipment listings on Mascus from a category URL, with pagination that keeps country and category filters. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Full Mascus category or search URL. The country site comes from the host (mascus.be, mascus.nl, mascus.de, mascus.com, …).",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number (default: 1). About 40 results per page.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "mediamarkt_product",
    title: "MediaMarkt Product",
    path: "/v2/mediamarkt/product",
    methods: ["GET", "POST"],
    description:
      "MediaMarkt Product. Read one MediaMarkt product by id or product URL, in the region you choose. You get price, currency, EAN, and availability. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Product URL or article id.  https://www.mediamarkt.ch/fr/product/_apple-iphone-15-2203371.html ",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Shop code when query is an article id. Example: ch-fr. Default ch-fr.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: 'When true, return raw HTML as {"result": "..."}.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "mediamarkt_search",
    title: "MediaMarkt Search",
    path: "/v2/mediamarkt/search",
    methods: ["GET", "POST"],
    description:
      "MediaMarkt Search. Search a MediaMarkt shop by keyword. Set region for Switzerland, Germany, Austria, and the other MediaMarktSaturn countries, then page the results. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Keyword or MediaMarkt URL. Example: iphone",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Shop code. Example: ch-fr or de. Default ch-fr. Ignored when query is a full URL.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number from 1. Example: 1",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: 'When true, return raw HTML as {"result": "..."}.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "micromania_product",
    title: "Micromania Product",
    path: "/v2/micromania/product",
    methods: ["GET", "POST"],
    description:
      "Micromania Product. Read one Micromania product from its URL or product id. You get the price, brand, EAN, platform, and stock. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Product URL or the numeric Micromania id. A keyword or a search URL returns 400.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          "When true, returns the raw HTML instead of the parsed JSON.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "micromania_search",
    title: "Micromania Search",
    path: "/v2/micromania/search",
    methods: ["GET", "POST"],
    description:
      "Micromania Search. Search Micromania for a keyword or a Search-Show URL. Each card has the product id, name, brand, EAN, price, and stock. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Keyword or a Micromania Search-Show URL. A product URL returns 400.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page number, from 1. Default is 1. Page 2 is sent as page=2.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          "When true, returns the raw HTML instead of the parsed JSON.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "mobile_ad",
    title: "Mobile Ad",
    path: "/v2/mobile/ad",
    methods: ["GET", "POST"],
    description:
      "Mobile Ad. Mobile Ad API. Fetch full car listing data from a mobile.de ad URL or numeric id. Returns pricing, specs, images and features via webunlocker. Credit cost: 3 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Mobile ad URL or numeric ad id.",
      },
      {
        name: "locale",
        type: "string",
        required: false,
        description:
          "Language for this ad. The same numeric id stays reachable for fr, es, de, and en.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML page source as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "mobile_search",
    title: "Mobile Search",
    path: "/v2/mobile/search",
    methods: ["GET", "POST"],
    description:
      "Mobile Search. Mobile Search API. Same mobile.de inventory for every locale. locale sets the language label and ad links, not which cars are returned. (3 credits) Credit cost: 3 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Search URL or make/model code (ms=).",
      },
      {
        name: "locale",
        type: "string",
        required: false,
        description:
          "Locale label for the results. The cars themselves stay the same for de, fr, and en.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page number, starting at 1. Same effect as page or pageNumber in the Mobile.de URL.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML page source as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "morele_product",
    title: "Morele Product",
    path: "/v2/morele/product",
    methods: ["GET", "POST"],
    description:
      "Morele Product. Read one morele.net product page. Flat JSON with PLN price, EAN, specs, and availability. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Morele product URL, or a numeric product id.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: 'When true, return the raw HTML as {"result": "..."}.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "morele_search",
    title: "Morele Search",
    path: "/v2/morele/search",
    methods: ["GET", "POST"],
    description:
      "Morele Search. Search morele.net by keyword or search URL. Returns product cards with PLN prices and pagination. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Keyword or a full Morele search URL. A product URL is rejected.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page number starting at 1. Page 2 asks Morele for the next screen of the same search.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: 'When true, return the raw HTML as {"result": "..."}.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "mrbricolage_suggest",
    title: "Mr.Bricolage Suggest",
    path: "/v2/mrbricolage/suggest",
    methods: ["GET", "POST"],
    description:
      "Mr.Bricolage Suggest. Live Mr.Bricolage product suggestions for a search keyword or EAN, including title, URL, image, price and currency. Credit cost: 3 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Search keyword or EAN used to query the Mr.Bricolage live suggest endpoint. Accepts product names, partial titles or numeric identifiers such as EAN barcodes.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "newegg_product",
    title: "Newegg Product",
    path: "/v2/newegg/product",
    methods: ["GET", "POST"],
    description:
      "Newegg Product. Read a Newegg product from an item number, catalog id, or URL. Returns price, specs, images, and seller. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Item number, catalog id, or product URL.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          "When true, return the raw HTML. The string false stays false.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "newegg_search",
    title: "Newegg Search",
    path: "/v2/newegg/search",
    methods: ["GET", "POST"],
    description:
      "Newegg Search. Search Newegg by keyword or search URL. Returns item numbers, dollar prices, stock, and pagination. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Keyword or a newegg.com search URL.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number, starting at 1. Example: 2.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          "When true, return the raw HTML. The string false stays false.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "northdata_company",
    title: "North Data Company",
    path: "/v2/northdata/company",
    methods: ["GET", "POST"],
    description:
      "North Data Company. North Data company profile: register, address, financials and history (1 credit). Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Company name, North Data id, or a profile URL.",
      },
      {
        name: "countries",
        type: "string",
        required: false,
        description:
          "ISO alpha-2, used only when query is a name. Same form as search: FR or FR,DE.",
      },
      {
        name: "domain",
        type: "string",
        required: false,
        description:
          "fr (default), com or en, de. Ignored when query is a URL.",
        default: "fr",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "northdata_search",
    title: "North Data Search",
    path: "/v2/northdata/search",
    methods: ["GET", "POST"],
    description:
      "North Data Search. Search North Data companies and people by name. Returns suggestion cards and pagination (1 credit). Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Company or person name, or a North Data suggest URL.",
      },
      {
        name: "countries",
        type: "string",
        required: false,
        description:
          "ISO alpha-2 codes, separated by comma, pipe or space (FR or FR,DE). Empty searches every country. A URL that already has countries wins.",
      },
      {
        name: "domain",
        type: "string",
        required: false,
        description:
          "Host of a name: fr (default), com or en, de. Ignored when query is a URL.",
        default: "fr",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Only 1. Below 1 returns 400. Above 1 returns 404. At most 15 rows.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "npi_provider",
    title: "NPI Provider",
    path: "/v2/npi/provider",
    methods: ["GET", "POST"],
    description:
      "NPI Provider. Fetch one NPPES provider or organization by 10-digit NPI or provider-view URL, including addresses and taxonomies. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. 10-digit NPI, example 1972813608, or a provider-view URL such as https://npiregistry.cms.hhs.gov/provider-view/1972813608.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "npi_search",
    title: "NPI Search",
    path: "/v2/npi/search",
    methods: ["GET", "POST"],
    description:
      "NPI Search. Search the NPPES NPI registry by person name, organization, or 10-digit NPI. With NPI-2, a text query is the organization name. total_results is null, and next is set only when the page is full. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: false,
        description:
          "Optional when another criterion is set. Example: Anthony Fauci. Also a 10-digit NPI such as 1972813608, or an NPPES search URL. With enumeration_type=NPI-2 this text is the organization name, for example Mayo Clinic. A provider-view URL is rejected here.",
      },
      {
        name: "first_name",
        type: "string",
        required: false,
        description:
          "Optional. Example: Anthony. Used as the given name when you do not want query to be split.",
      },
      {
        name: "last_name",
        type: "string",
        required: false,
        description:
          "Optional. Example: Fauci. A single-word query such as Smith is used as the last name.",
      },
      {
        name: "organization_name",
        type: "string",
        required: false,
        description:
          "Optional. Example: Mayo Clinic. You can also pass that name in query with enumeration_type=NPI-2.",
      },
      {
        name: "city",
        type: "string",
        required: false,
        description: "Optional. Practice city. Example: Washington.",
      },
      {
        name: "state",
        type: "string",
        required: false,
        description:
          "Optional. Two-letter state code. Example: DC. Any other value is rejected.",
      },
      {
        name: "postal_code",
        type: "string",
        required: false,
        description: "Optional. Postal code. Example: 20016.",
      },
      {
        name: "taxonomy",
        type: "string",
        required: false,
        description:
          "Optional. Taxonomy description. Example: Internal Medicine.",
      },
      {
        name: "enumeration_type",
        type: "string",
        required: false,
        description:
          "Optional. NPI-1 for a person or NPI-2 for an organization. Example: NPI-2. NPI-2 treats a text query as an organization name.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Optional. Page number, starting at 1. Example: 2. Defaults to 1.",
      },
      {
        name: "limit",
        type: "number",
        required: false,
        description:
          "Optional. Page size. Example: 10. Defaults to 10 and cannot exceed 200. next is a URL only when the page contains this many rows.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "oceanio_search",
    title: "Oceanio Search",
    path: "/v2/oceanio/search",
    methods: ["GET", "POST"],
    description:
      "Oceanio Search. Search Ocean.io by domain or company name to find the matching company, similar companies, contacts, and people. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Domain or company name.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "olx_ad",
    title: "OLX Ad",
    path: "/v2/olx/ad",
    methods: ["GET", "POST"],
    description:
      "OLX Ad. Read one OLX ad from its id or URL. You get the asking price, the city, and the seller name. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "OLX listing URL.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Ignored when query is a full URL. The host selects the country.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "When true, return raw HTML.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "olx_product",
    title: "OLX Product",
    path: "/v2/olx/product",
    methods: ["GET", "POST"],
    description:
      "OLX Product. Read one OLX ad from its id or URL. You get the asking price, the city, and the seller name. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Full URL of the OLX listing page to retrieve. Must be a valid olx.com.br listing URL. Example 1:",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "olx_search",
    title: "OLX Search",
    path: "/v2/olx/search",
    methods: ["GET", "POST"],
    description:
      "OLX Search. Search OLX Brazil classifieds by keyword and get title, price, location, seller type, and condition as structured JSON in real time. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Search keyword or phrase, as you would type it in the OLX search bar. Supports Portuguese terms for Brazilian inventory.",
      },
      {
        name: "category",
        type: "string",
        required: false,
        description:
          "OLX category slug to restrict results to a specific vertical. Common values:",
      },
      {
        name: "state",
        type: "string",
        required: false,
        description:
          "Brazilian state abbreviation to filter results geographically.",
      },
      {
        name: "city",
        type: "string",
        required: false,
        description:
          "City slug to narrow results to a specific municipality. Use lowercase with hyphens.",
      },
      {
        name: "min_price",
        type: "number",
        required: false,
        description: "Minimum listing price in BRL.",
      },
      {
        name: "max_price",
        type: "number",
        required: false,
        description: "Maximum listing price in BRL.",
      },
      {
        name: "seller_type",
        type: "string",
        required: false,
        description: "Filter by seller type.",
      },
      {
        name: "sort",
        type: "string",
        required: false,
        description: "Sort order for results.",
        default: "relevance",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number for paginated results. Default: 1.",
        default: 1,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "oscaro_product",
    title: "Oscaro Product",
    path: "/v2/oscaro/product",
    methods: ["GET", "POST"],
    description:
      "Oscaro Product. Oscaro Product API. Fetch full auto parts product data from an Oscaro product URL. Returns pricing, brand, reference, images and availability via browser rendering and JSON-LD parsing. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Oscaro product page URL (*-{sku}-p suffix).",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML page source as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "oscaro_search",
    title: "Oscaro Search",
    path: "/v2/oscaro/search",
    methods: ["GET", "POST"],
    description:
      "Oscaro Search. Oscaro Search API. Search auto parts by keyword, search URL or category listing on oscaro.com, oscaro.es and oscaro.pt. Returns prices and pagination via browser rendering. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Search keyword, search URL, or category listing URL (*-{id}-g).",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description: "Target shop when query is a keyword (default: com).",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "1-based page number override for category listing URLs (default: read from URL or 1). Uses ?page=2 on *-g pages.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML page source as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "ovoko_ad",
    title: "Ovoko Ad",
    path: "/v2/ovoko/ad",
    methods: ["GET", "POST"],
    description:
      "Ovoko Ad. Extract an Ovoko listing from a SKU URL: price, currency, images, seller, quality, vehicle make, part numbers, and warranty. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Full Ovoko listing URL. The last path segment must be a SKU slug (example: qbb17557-95c827460c-porsche-macan-...) or a known product prefix.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "ovoko_search",
    title: "Ovoko Search",
    path: "/v2/ovoko/search",
    methods: ["GET", "POST"],
    description:
      "Ovoko Search. Search Ovoko used-parts listings from a search URL and retrieve title, price, OEM codes, seller, vehicle text, and pagination. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Full Ovoko search URL. Only search pages are accepted (not category, catalog, or offer pages).",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "owler_company_info",
    title: "Owler Company Info",
    path: "/v2/owler/company/info",
    methods: ["GET", "POST"],
    description:
      "Owler Company Info. Retrieve detailed company intelligence from Owler, including revenue, employee count, CEO info, competitors, funding, and industry sectors. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "The company to look up on Owler. Multiple formats are accepted:",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "owler_search",
    title: "Owler Search",
    path: "/v2/owler/search",
    methods: ["GET", "POST"],
    description:
      "Owler Search. Search for companies on Owler by name or keyword, returning a list of matching companies with slugs, logos, domains, and profile URLs. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "The company name or keyword to search for on Owler.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "pagesjaunes_page_info",
    title: "PagesJaunes Page Info",
    path: "/v2/pagesjaunes/page/info",
    methods: ["GET", "POST"],
    description:
      "PagesJaunes Page Info. Retrieve detailed business information from a PagesJaunes page, including contact details, opening hours, services, payment methods, and SIREN number. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "A PagesJaunes business page URL or business ID.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "pagesjaunes_search",
    title: "PagesJaunes Search",
    path: "/v2/pagesjaunes/search",
    methods: ["GET", "POST"],
    description:
      "PagesJaunes Search. Search PagesJaunes for French local businesses by category and location, returning paginated results with contact details and ratings. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "A valid PagesJaunes search URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "patreon_profile_info",
    title: "Patreon Profile Info",
    path: "/v2/patreon/profile/info",
    methods: ["GET", "POST"],
    description:
      "Patreon Profile Info. Retrieve a Patreon creator profile with patron counts, membership tiers, campaign summary, and creator metadata. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Patreon profile URL or creator vanity name.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "patreon_search",
    title: "Patreon Search",
    path: "/v2/patreon/search",
    methods: ["GET", "POST"],
    description:
      "Patreon Search. Search Patreon creators by keyword and retrieve campaign cards with patron counts, post counts, and profile URLs. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Search keyword to find Patreon creators.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "petsmart_product",
    title: "PetSmart Product",
    path: "/v2/petsmart/product",
    methods: ["GET", "POST"],
    description:
      "PetSmart Product. Read one PetSmart product URL, including the selected size, dollar price, flavor, and item number. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "A PetSmart product link.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          "Set to true to get the raw HTML in result instead of the parsed JSON.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "petsmart_search",
    title: "PetSmart Search",
    path: "/v2/petsmart/search",
    methods: ["GET", "POST"],
    description:
      "PetSmart Search. Search PetSmart by keyword or search URL. Page through pet food, litter, and supplies with dollar prices. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "What to look for. A word, or a PetSmart search link.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Which page of results, starting at 1. Page 2 returns a different set of products.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          "Set to true to get the raw HTML in result instead of the parsed JSON.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "picard_product",
    title: "Picard Product",
    path: "/v2/picard/product",
    methods: ["GET", "POST"],
    description:
      "Picard Product. Picard Product API. Fetch full frozen food product data from a Picard URL or reference. Returns pricing, images, description, Nutri-Score, Planet-Score, breadcrumb and reviews. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Picard product URL or numeric reference.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "picard_search",
    title: "Picard Search",
    path: "/v2/picard/search",
    methods: ["GET", "POST"],
    description:
      "Picard Search. Picard Search API. Search frozen food listings on picard.fr by keyword or URL. Parses SFCC Search-UpdateGrid HTML; returns prices, Nutri-Score, ratings and pagination. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Search keyword or full Picard search URL.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "1-based page number (24 results per page via SFCC Search-UpdateGrid). Default: 1.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "pinterest_user_info",
    title: "Pinterest User Info",
    path: "/v2/pinterest/user/info",
    methods: ["GET", "POST"],
    description:
      "Pinterest User Info. Access Pinterest user profiles and analytics for targeted marketing and audience insights. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "The Pinterest profile to retrieve. Accepts a full profile URL or a username.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "pitchbook_company_info",
    title: "PitchBook Company Info",
    path: "/v2/pitchbook/company/info",
    methods: ["GET", "POST"],
    description:
      "PitchBook Company Info. Get a PitchBook company profile: overview, funding, competitors and more via browser rendering. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "PitchBook company id or company profile URL.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "When true, return rendered HTML instead of JSON.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "pitchbook_search",
    title: "PitchBook Search",
    path: "/v2/pitchbook/search",
    methods: ["GET", "POST"],
    description:
      "PitchBook Search. Search PitchBook for companies, news and profiles by keyword or search URL via browser rendering. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Keyword or PitchBook search URL.",
      },
      {
        name: "page",
        type: "string",
        required: false,
        description: "Page number for content search (/search?q=...).",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "When true, return rendered HTML instead of JSON.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "pointp_product",
    title: "Point.P Product",
    path: "/v2/pointp/product",
    methods: ["GET", "POST"],
    description:
      "Point.P Product. Point.P Product API: scrape live /p/ product pages from a full URL. Get title, images, EAN, pricing, specifications, and breadcrumbs as JSON via browser rendering. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full Point.P product page URL (/p/...-A{id}).",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML page source as {"result": "..."} instead of parsed JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "pointp_search",
    title: "Point.P Search",
    path: "/v2/pointp/search",
    methods: ["GET", "POST"],
    description:
      "Point.P Search. Point.P Search API: search by keyword or URL and get building-material listings with prices, brands, ratings, units, and pagination as JSON via browser rendering. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Search keyword or full Point.P search results URL.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "1-based page number for pagination. Overrides the page inferred from the URL. Defaults to 1 when omitted.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML page source as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "prnewswire_article",
    title: "PR Newswire Article",
    path: "/v2/prnewswire/article",
    methods: ["GET", "POST"],
    description:
      "PR Newswire Article. Read one PR Newswire press release from its URL. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. PR Newswire release URL, for example https://www.prnewswire.com/news-releases/pumpkin-awarded-11-000-in-donations-to-veterinary-clinics-for-cost-of-care-education-302924942.html. A keyword is rejected.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "prnewswire_search",
    title: "PR Newswire Search",
    path: "/v2/prnewswire/search",
    methods: ["GET", "POST"],
    description:
      "PR Newswire Search. Search PR Newswire press releases by keyword or by a news-search URL. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. Keyword, for example apple, or a PR Newswire news-search URL such as https://www.prnewswire.com/search/news/?keyword=apple. A release URL is rejected.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Optional. Page number starting at 1. Example: 2. Omitted means page 1. A page already present in a search URL is kept when this is omitted or 1.",
        default: 1,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "producthunt_product_info",
    title: "ProductHunt Product Info",
    path: "/v2/producthunt/product/info",
    methods: ["GET", "POST"],
    description:
      "ProductHunt Product Info. Retrieve product data from ProductHunt, including tagline, categories, screenshots, reviews rating, and social links. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "A ProductHunt product URL or product slug.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "proshop_product",
    title: "Proshop Product",
    path: "/v2/proshop/product",
    methods: ["GET", "POST"],
    description:
      "Proshop Product. Read one proshop.dk product page. Flat JSON with DKK price, EAN, specs, and stock text. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Proshop product id, or a product URL. The id is the last path segment.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: 'When true, return the raw HTML as {"result": "..."}.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "proshop_search",
    title: "Proshop Search",
    path: "/v2/proshop/search",
    methods: ["GET", "POST"],
    description:
      "Proshop Search. Search proshop.dk by keyword or search URL. Returns product cards with DKK prices and pagination. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Keyword or a full Proshop search URL with s=. A product URL is rejected.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number starting at 1. Proshop sends this as pn.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: 'When true, return the raw HTML as {"result": "..."}.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "rappi_product",
    title: "Rappi Product",
    path: "/v2/rappi/product",
    methods: ["GET", "POST"],
    description:
      "Rappi Product. Fetch one Rappi Mexico product, including the primary store price and the other store offers. The primary price can differ from a search card. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. Product URL on rappi.com.mx, example https://www.rappi.com.mx/p/santa-clara-leche-deslactosada-semidescremada-1-l-14069, or a numeric master id such as 14069.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "rappi_search",
    title: "Rappi Search",
    path: "/v2/rappi/search",
    methods: ["GET", "POST"],
    description:
      "Rappi Search. Search Rappi Mexico on rappi.com.mx. The city resolves to Mexico City. Each row is one store offer, and next is null. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. Keyword, example leche, or a rappi.com.mx search URL such as https://www.rappi.com.mx/search?query=leche. A product URL or another country host is rejected.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Optional. Only page 1 returns rows. Example: 1. Defaults to 1. Page 2 is rejected because the payload has no next page.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "ratemyprofessors_professor",
    title: "Rate My Professors Professor",
    path: "/v2/ratemyprofessors/professor",
    methods: ["GET", "POST"],
    description:
      "Rate My Professors Professor. Read one Rate My Professors profile, including difficulty and would-take-again when the page shows them. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. The numeric professor id from search, or a /professor/{id} URL. A name is not accepted.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "ratemyprofessors_search",
    title: "Rate My Professors Search",
    path: "/v2/ratemyprofessors/search",
    methods: ["GET", "POST"],
    description:
      "Rate My Professors Search. Search Rate My Professors by name. Cards include school, department, difficulty, and would-take-again when the card shows them. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. A professor name, or a Rate My Professors search URL whose path contains /search/professors or whose query contains q=.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "realestatecomau_search",
    title: "realestate.com.au Search",
    path: "/v2/realestatecomau/search",
    methods: ["GET", "POST"],
    description:
      "realestate.com.au Search. Search realestate.com.au buy, rent, or sold results. A place such as Sydney, NSW defaults to homes for sale. Each card has price, address, rooms, and a property URL. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Place or a realestate.com.au results URL.",
      },
      {
        name: "channel",
        type: "string",
        required: false,
        description: "buy, rent, or sold. Used when query is a place.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page from 1.",
        default: 1,
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "Optional. Default false.",
        default: false,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "realtor_property",
    title: "Realtor Property",
    path: "/v2/realtor/property",
    methods: ["GET", "POST"],
    description:
      "Realtor Property. Extract full property details from a Realtor.com listing URL, including price, specs, photos, agents, features, and location data. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full Realtor.com property detail URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "realtor_search",
    title: "Realtor Search",
    path: "/v2/realtor/search",
    methods: ["GET", "POST"],
    description:
      "Realtor Search. Search Realtor.com listings from a search URL and retrieve prices, beds, baths, sqft, photos, and property metadata. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full Realtor.com search results URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "redfin_property",
    title: "Redfin Property",
    path: "/v2/redfin/property",
    methods: ["GET", "POST"],
    description:
      "Redfin Property. Read one for-sale Redfin home. Pass the url from search, which already includes the market id. The response is a flat listing, the same fields as one search result. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Redfin home link. Use the url returned by search.",
      },
      {
        name: "region_id",
        type: "number",
        required: false,
        description:
          "Market id. Required only when the home link does not already include region_id.",
      },
      {
        name: "region_type",
        type: "number",
        required: false,
        description:
          "Required with region_id when the home link has no region_type.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "Optional. Default false.",
        default: false,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "redfin_search",
    title: "Redfin Search",
    path: "/v2/redfin/search",
    methods: ["GET", "POST"],
    description:
      "Redfin Search. Search for-sale homes on Redfin from a city, neighborhood, or county link. Each listing url includes the market id to pass to the property endpoint. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Redfin for-sale link for a city, neighborhood, or county.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page of the for-sale feed, from 1.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "Optional. Default false.",
        default: false,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "reichelt_product",
    title: "Reichelt Product",
    path: "/v2/reichelt/product",
    methods: ["GET", "POST"],
    description:
      "Reichelt Product. Read one reichelt.de product URL, including article number, EAN, and the euro price. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "A reichelt.de or reichelt.com product link. A search link returns 400.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "Set to true to get the raw HTML in result.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "reichelt_search",
    title: "Reichelt Search",
    path: "/v2/reichelt/search",
    methods: ["GET", "POST"],
    description:
      "Reichelt Search. Search reichelt.de by keyword or category. Euro prices are rebuilt from the number, including whole-euro amounts. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "What to look for. A word such as 1n4148, or a reichelt.de search or category link. A product link returns 400.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page number, starting at 1. Page 2 is PAGE=1 on the shop.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "Set to true to get the raw HTML in result.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "reverb_product",
    title: "Reverb Product",
    path: "/v2/reverb/product",
    methods: ["GET", "POST"],
    description:
      "Reverb Product. Reverb Product API: fetch full listing data from a Reverb URL or listing id. Returns pricing, specs, images, description and shop info via browser rendering. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Reverb listing URL or numeric listing id.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML page source as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "reverb_search",
    title: "Reverb Search",
    path: "/v2/reverb/search",
    methods: ["GET", "POST"],
    description:
      "Reverb Search. Reverb Search API: search music gear listings by keyword, query string or marketplace URL on Reverb. Returns prices, thumbnails and pagination via browser rendering. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Search keyword, query string, or full Reverb marketplace URL.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "1-based page number override (default: read from URL or 1).",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML page source as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "rexel_product",
    title: "Rexel Product",
    path: "/v2/rexel/product",
    methods: ["GET", "POST"],
    description:
      "Rexel Product. Get a Rexel France product page: references, EAN, descriptions, images and specs via browser rendering. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Rexel France product URL containing /p/{id}.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "When true, return rendered HTML instead of JSON.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "rexel_search",
    title: "Rexel Search",
    path: "/v2/rexel/search",
    methods: ["GET", "POST"],
    description:
      "Rexel Search. Search Rexel France by keyword, EAN or search URL. Returns product cards and pagination via browser rendering. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Keyword, EAN, or Rexel France search URL.",
      },
      {
        name: "page",
        type: "string",
        required: false,
        description: "Page number (1-based). Page 1 omits page in the URL.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "When true, return rendered HTML instead of JSON.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "rightmove_property",
    title: "Rightmove Property",
    path: "/v2/rightmove/property",
    methods: ["GET", "POST"],
    description:
      "Rightmove Property. Read one Rightmove property from its URL or numeric id. The response is a flat object with price, tenure, floor area, stations, and the agent. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Rightmove property URL or the numeric id.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "Optional. Default false.",
        default: false,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "rightmove_search",
    title: "Rightmove Search",
    path: "/v2/rightmove/search",
    methods: ["GET", "POST"],
    description:
      "Rightmove Search. Search Rightmove by a UK place name or a search URL. Each card has a numeric price, a price label rebuilt from that number, the address, the agent, and a property URL. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "UK place name or a Rightmove search URL.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Results page, from 1.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "Optional. Default false.",
        default: false,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "rsonline_product",
    title: "RS Online Product",
    path: "/v2/rsonline/product",
    methods: ["GET", "POST"],
    description:
      "RS Online Product. Read one RS Online UK product URL, including the RS stock number, manufacturer part, and pound price. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "A uk.rs-online.com product link. The response is one flat product. price is the numeric pound amount and price_display is the printed string. A search link, a bare stock number, or another host returns 400.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          "Default false. true replaces the product object with result, the rendered HTML.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "rsonline_search",
    title: "RS Online Search",
    path: "/v2/rsonline/search",
    methods: ["GET", "POST"],
    description:
      "RS Online Search. Search RS Online UK by keyword or category. Pound prices keep the amount printed on the page. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "A keyword, or a uk.rs-online.com search or category link. Empty, another host, or a product link returns 400. A keyword builds /web/c/?searchTerm=... and page 1 omits pn. Each card has price as a number and price_display as the pound string.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page number starting at 1. Omit it for page 1. Page 2 sets pn=2, changes pagination.page, and returns the next cards. pagination.next is that next URL, or null on the last page. A value below 1 returns 400.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          "Default false. true replaces results and pagination with result, the rendered HTML.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "seek_job",
    title: "SEEK Job",
    path: "/v2/seek/job",
    methods: ["GET", "POST"],
    description:
      "SEEK Job. Read one SEEK Australia job from its URL or numeric id. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. SEEK job URL or numeric id, for example 95568355 or https://www.seek.com.au/job/95568355. A keyword is rejected.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "seek_search",
    title: "SEEK Search",
    path: "/v2/seek/search",
    methods: ["GET", "POST"],
    description:
      "SEEK Search. Search SEEK Australia jobs by keyword or by a results URL. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. Job keyword, for example nurse, or a SEEK results URL such as https://www.seek.com.au/nurse-jobs. A /job/<id> URL is rejected.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Optional. Page number starting at 1. Example: 2. Omitted means page 1. A page already present in a results URL is kept when this is omitted or 1.",
        default: 1,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "seloger_agency",
    title: "SeLoger Agency",
    path: "/v2/seloger/agency",
    methods: ["GET", "POST"],
    description:
      "SeLoger Agency. Retrieve detailed profile information for a SeLoger real estate agency including contact details, ratings, reviews, and address. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "A valid SeLoger agency profile URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "seloger_agency_rent",
    title: "SeLoger Agency Rent",
    path: "/v2/seloger/agency/rent",
    methods: ["GET", "POST"],
    description:
      "SeLoger Agency Rent. Retrieve paginated rental property listings published by a specific SeLoger agency using its numeric agency ID. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "A valid SeLoger agency ID.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page number for paginating through the agency's rental listings.",
        default: 1,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "seloger_agency_sale",
    title: "SeLoger Agency Sale",
    path: "/v2/seloger/agency/sale",
    methods: ["GET", "POST"],
    description:
      "SeLoger Agency Sale. Retrieve paginated sale property listings published by a specific SeLoger agency using its numeric agency ID. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "A valid SeLoger agency ID.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page number for paginating through the agency's sale listings.",
        default: 1,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "seloger_property",
    title: "SeLoger Property",
    path: "/v2/seloger/property",
    methods: ["GET", "POST"],
    description:
      "SeLoger Property. Efficiently extract detailed data from a SeLoger real estate listing including agency info, pricing, photos, description, and property criteria. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "A valid SeLoger property listing URL.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          "Whether to return the raw HTML source of the property page instead of parsed JSON data.",
        default: false,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "seloger_search",
    title: "SeLoger Search",
    path: "/v2/seloger/search",
    methods: ["GET", "POST"],
    description:
      "SeLoger Search. Efficiently extract real estate listings from SeLoger search pages for market insights, property management, and investment analysis. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "A valid SeLoger search results URL. Any SeLoger search page URL with filters is supported: location, property type, price range, surface, and number of rooms can all be embedded in the URL.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          "Whether to return the raw HTML source of the search results page instead of parsed JSON data.",
        default: false,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "sephora_product",
    title: "Sephora Product",
    path: "/v2/sephora/product",
    methods: ["GET", "POST"],
    description:
      "Sephora Product. Read one European Sephora product by id or product URL. Set region when you are not on the French shop. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "A Sephora product URL. A product id such as 831955 also works.  https://www.sephora.fr/p/midnight-espresso---eau-de-parfum-au-cafe-831955.html ",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Shop when query is only an id. Use fr for France or de for Germany. Leave empty for France.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "Return the rendered HTML instead of JSON.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "sephora_search",
    title: "Sephora Search",
    path: "/v2/sephora/search",
    methods: ["GET", "POST"],
    description:
      "Sephora Search. Search a European Sephora shop by keyword. Region defaults to France. Page through makeup and skincare cards. The US site is a different page and is not included. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "A product word, for example mascara. Or paste a full Sephora search URL.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Shop code. Use fr for France or de for Germany. Leave empty for France. A full URL picks the shop.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page number, starting at 1. Use 2 for the next page of products.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "Return the rendered HTML instead of JSON.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "shophouzz_product",
    title: "Shophouzz Product",
    path: "/v2/shophouzz/product",
    methods: ["GET", "POST"],
    description:
      "Shophouzz Product. Retrieve full product details from Shophouzz, including title, price, variants, images, vendor, and structured metadata. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Full URL of the Shophouzz product page to retrieve details for.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "shopify_apps",
    title: "Shopify Apps",
    path: "/v2/shopify/apps",
    methods: ["GET", "POST"],
    description:
      "Shopify Apps. Retrieve structured details about any Shopify App Store listing, including title, logo, screenshots, pricing plans, categories, and description. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "URL of the Shopify App Store listing to scrape.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "shopify_catalog",
    title: "Shopify Catalog",
    path: "/v2/shopify/catalog",
    methods: ["GET", "POST"],
    description:
      "Shopify Catalog. List products from a Shopify shop. query is the shop domain or a URL on that shop. page and limit choose the slice. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Shop domain or a URL on that shop.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number, starting at 1.",
      },
      {
        name: "limit",
        type: "number",
        required: false,
        description: "How many items to return on this page.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "shopify_collections",
    title: "Shopify Collections",
    path: "/v2/shopify/collections",
    methods: ["GET", "POST"],
    description:
      "Shopify Collections. List collections from a Shopify shop. query is the shop domain or a URL on that shop. page and limit choose the slice. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Shop domain or a URL on that shop.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number, starting at 1.",
      },
      {
        name: "limit",
        type: "number",
        required: false,
        description: "How many items to return on this page.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "shopify_product",
    title: "Shopify Product",
    path: "/v2/shopify/product",
    methods: ["GET", "POST"],
    description:
      "Shopify Product. Extract full product details from any Shopify store product page, including title, variants, pricing, images, inventory, and options. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "URL of a Shopify product page to scrape.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "similarweb_domain",
    title: "SimilarWeb Domain",
    path: "/v2/similarweb/domain",
    methods: ["GET", "POST"],
    description:
      "SimilarWeb Domain. Retrieve website traffic and engagement metrics for a domain from the public Similarweb page, including visits, bounce rate, rank, keywords, and traffic sources. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "A domain name to retrieve traffic and engagement metrics for.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "similarweb_search",
    title: "Similarweb Search",
    path: "/v2/similarweb/search",
    methods: ["GET", "POST"],
    description:
      "Similarweb Search. Search the public Similarweb page for websites, companies, and mobile apps related to a keyword. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Domain name or keyword to search for in the Similarweb database.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "snapeda_product",
    title: "SnapEDA Product",
    path: "/v2/snapeda/product",
    methods: ["GET", "POST"],
    description:
      "SnapEDA Product. SnapEDA Product API: fetch full part page data from a SnapEDA URL or MPN/manufacturer slug. Returns CAD models, datasheet, RoHS, distributor pricing and availability via browser rendering. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "SnapEDA part page URL or MPN/manufacturer slug.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw rendered HTML as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "snapeda_search",
    title: "SnapEDA Search",
    path: "/v2/snapeda/search",
    methods: ["GET", "POST"],
    description:
      "SnapEDA Search. SnapEDA Search API: search electronic parts by keyword or URL on SnapMagic Search (ex-SnapEDA). Returns MPN, manufacturer, pricing, CAD availability and pagination via browser rendering. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Search keyword or full SnapEDA / SnapMagic search URL.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "1-based page number override (default: read from URL or 1). SnapEDA returns 20 results per page.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw rendered HTML as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "starbucks_menu",
    title: "Starbucks Menu",
    path: "/v2/starbucks/menu",
    methods: ["GET", "POST"],
    description:
      "Starbucks Menu. Full Starbucks menu for one café, with the default-size price of each item. Prices use browser rendering. Credit cost: 3 credits per call.",
    params: [
      {
        name: "store_number",
        type: "string",
        required: false,
        description:
          "Café number from Search, short (9230) or full (9230-154245).",
      },
      {
        name: "query",
        type: "string",
        required: false,
        description:
          "Same café number, or a menu URL that contains storeNumber. Used when store_number is empty.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "starbucks_product",
    title: "Starbucks Product",
    path: "/v2/starbucks/product",
    methods: ["GET", "POST"],
    description:
      "Starbucks Product. One Starbucks item at one café, with a price for every size. Get the café from Search first. Prices use browser rendering. Credit cost: 3 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Product and form, or a Starbucks product URL.",
      },
      {
        name: "store_number",
        type: "string",
        required: false,
        description:
          "Café number from Search, short (9230) or full (9230-154245). Required when the product URL has no storeNumber.",
      },
      {
        name: "form_code",
        type: "string",
        required: false,
        description:
          "Form when query is only a product number. Usually hot or iced.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "starbucks_search",
    title: "Starbucks Search",
    path: "/v2/starbucks/search",
    methods: ["GET", "POST"],
    description:
      "Starbucks Search. Nearest Starbucks cafés from coordinates or a store-locator URL. Returns address, hours, amenities, and the store number used by Menu and Product. Credit cost: 3 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: false,
        description:
          "Store-locator URL, or a lat,lng pair. Required when lat and lng are empty.",
      },
      {
        name: "lat",
        type: "number",
        required: false,
        description:
          "Latitude. Send it with lng. If both are set, they replace any coordinates found in query.",
      },
      {
        name: "lng",
        type: "number",
        required: false,
        description: "Longitude. Send it with lat.",
      },
      {
        name: "place",
        type: "string",
        required: false,
        description:
          "Optional place label sent with the coordinates, for example New York, NY. Coordinates are still required.",
      },
      {
        name: "features",
        type: "string",
        required: false,
        description:
          "Optional amenity filter. Separate codes with commas. ON keeps cafés that offer mobile order.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "stats",
    title: "Stats",
    path: "/v2/stats",
    methods: ["GET"],
    description:
      "Stats. Infrastructure health for an engine or endpoint over the last hour. Not scoped to your account or tenant. Enabled per account: HTTP 403 means contact support to activate it.",
    params: [
      {
        name: "engine",
        type: "string",
        required: false,
        description:
          "API family to check, for example website. Provide at least engine or path.",
      },
      {
        name: "path",
        type: "string",
        required: false,
        description:
          "Specific endpoint to check, for example /v2/website/crawler. If you also pass engine, use an endpoint from that API.",
      },
    ],
  },
  {
    name: "stockx_product",
    title: "StockX Product",
    path: "/v2/stockx/product",
    methods: ["GET", "POST"],
    description:
      "StockX Product. Retrieve detailed product information from StockX, including market prices, bid/ask data, size variants, and product metadata. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "A StockX product slug.",
      },
      {
        name: "country",
        type: "string",
        required: false,
        description: "Country code for localized pricing and availability.",
        default: "US",
      },
      {
        name: "currency",
        type: "string",
        required: false,
        description: "Currency code for price display.",
        default: "USD",
      },
      {
        name: "language",
        type: "string",
        required: false,
        description: "Language code for localized content.",
        default: "en-US",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "stockx_search",
    title: "StockX Search",
    path: "/v2/stockx/search",
    methods: ["GET", "POST"],
    description:
      "StockX Search. Search StockX for products by name, brand, SKU, or slug and receive a list of matching items with product IDs, slugs, images, and colorways. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Search query for StockX products. Can be a product name, brand, SKU, or slug.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "stockx_trends",
    title: "StockX Trends",
    path: "/v2/stockx/trends",
    methods: ["GET", "POST"],
    description:
      "StockX Trends. Retrieve trending products on StockX by category, with options to sort by featured, most active, or release date. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "StockX product category to retrieve trending items for.",
      },
      {
        name: "sort_by",
        type: "string",
        required: false,
        description: "Sort order for trending results.",
        default: "featured",
      },
      {
        name: "country",
        type: "string",
        required: false,
        description: "Country code for localized trending data.",
        default: "US",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "stubhub_event",
    title: "StubHub Event",
    path: "/v2/stubhub/event",
    methods: ["GET", "POST"],
    description:
      "StubHub Event. Read one StubHub event from its URL or numeric id, including the lowest printed ticket price. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. StubHub event URL or numeric id, for example 162387399 or https://www.stubhub.com/harlem-globetrotters-marseille-tickets-3-31-2027/event/162387399/. A keyword is rejected.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "stubhub_search",
    title: "StubHub Search",
    path: "/v2/stubhub/search",
    methods: ["GET", "POST"],
    description:
      "StubHub Search. Search StubHub events by keyword or by a StubHub search URL. The response is the first embedded page. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. Keyword, for example nba, or a StubHub search URL such as https://www.stubhub.com/secure/search/?q=nba. An event URL is rejected.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Optional. Only page 1 returns events. Example: 1. Page 2 and above return 404 because the search document has no further page.",
        default: 1,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "target_product",
    title: "Target Product",
    path: "/v2/target/product",
    methods: ["GET", "POST"],
    description:
      "Target Product. Get a Target.com product page: price, description, images and variations via browser rendering. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Target product URL or bare TCIN.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "When true, return rendered HTML instead of JSON.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "target_search",
    title: "Target Search",
    path: "/v2/target/search",
    methods: ["GET", "POST"],
    description:
      "Target Search. Search Target.com by keyword or search URL. Returns product cards with price, rating and pagination via browser rendering. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Keyword or Target search URL.",
      },
      {
        name: "page",
        type: "string",
        required: false,
        description: "Page number (1-based).",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description: "When true, return rendered HTML instead of JSON.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "tdlr_license",
    title: "TDLR License",
    path: "/v2/tdlr/license",
    methods: ["GET", "POST"],
    description:
      "TDLR License. Fetch one TDLR license by detail id or SearchResultDetail URL, including status, subtype, DBA, and notes. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. Detail id, example AIRREF00000564, or the SearchResultDetail URL from search.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "tdlr_search",
    title: "TDLR License Search",
    path: "/v2/tdlr/search",
    methods: ["GET", "POST"],
    description:
      "TDLR License Search. Search Texas TDLR licenses by name, city, county, or ZIP. license_type such as AIRREF is required for a useful search. 25 rows per page. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: false,
        description:
          "Optional when city, county, or postal_code is set. Person or business name, example SMITH. A detail URL is rejected.",
      },
      {
        name: "license_type",
        type: "string",
        required: false,
        description:
          "Optional on the request, required for a useful search. License type code, example AIRREF for air conditioning contractors. ALL or blank searches every type.",
      },
      {
        name: "city",
        type: "string",
        required: false,
        description:
          "Optional. Business city. Example: Austin. One of query, city, county, or postal_code is required.",
      },
      {
        name: "county",
        type: "string",
        required: false,
        description: "Optional. Business county. Example: TRAVIS.",
      },
      {
        name: "postal_code",
        type: "string",
        required: false,
        description: "Optional. Business ZIP. Example: 78701.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Optional. Page number starting at 1. Example: 2. Defaults to 1. Each page has 25 rows.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "ted_notice",
    title: "TED Notice",
    path: "/v2/ted/notice",
    methods: ["GET", "POST"],
    description:
      "TED Notice. TED notice profile: buyer, lots, deadline, value and documents (1 credit). Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Publication number, or a TED notice URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "ted_search",
    title: "TED Search",
    path: "/v2/ted/search",
    methods: ["GET", "POST"],
    description:
      "TED Search. Search TED procurement notices by keyword or filters. Returns notice cards and pagination (1 credit). Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: false,
        description: "Keyword, publication number, or a TED search URL.",
      },
      {
        name: "notice_type",
        type: "string",
        required: false,
        description:
          "Notice code such as cn-standard or can-standard. Combined with AND.",
      },
      {
        name: "country",
        type: "string",
        required: false,
        description:
          "Buyer country, ISO alpha-2 or alpha-3. FR becomes FRA. A country name returns 400.",
      },
      {
        name: "place",
        type: "string",
        required: false,
        description:
          "Place of performance: country code or NUTS code such as FRK24.",
      },
      {
        name: "cpv",
        type: "string",
        required: false,
        description:
          "CPV code or prefix. Digits and an optional star, for example 72000000 or 30*.",
      },
      {
        name: "buyer",
        type: "string",
        required: false,
        description: "Buyer name, matched as a phrase.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page from 1. next is always null: pass page + 1. A page past the last one returns 404.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "thalia_product",
    title: "Thalia Product",
    path: "/v2/thalia/product",
    methods: ["GET", "POST"],
    description:
      "Thalia Product. Read one Thalia product from its URL. You get price, author or brand, and the product details. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Product URL or Thalia article id.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, returns {"result": "<html>..."} instead of the parsed JSON. Default false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "thalia_search",
    title: "Thalia Search",
    path: "/v2/thalia/search",
    methods: ["GET", "POST"],
    description:
      "Thalia Search. Search Thalia by keyword and page books, media, and gifts. Cards include title, price, and the product link. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Keyword or a thalia.de search URL (/suche or a category URL). A product URL returns 400.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page number, from 1. Sent to Thalia as the query parameter p. Default 1.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, returns {"result": "<html>..."} instead of the parsed JSON. Default false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "thefork_restaurant",
    title: "TheFork Restaurant",
    path: "/v2/thefork/restaurant",
    methods: ["GET", "POST"],
    description:
      "TheFork Restaurant. Extract a full TheFork restaurant profile from a restaurant page URL, including ratings, tags, photo gallery, opening hours, and AI review summaries via browser rendering. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full TheFork restaurant page URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "thefork_search",
    title: "TheFork Search",
    path: "/v2/thefork/search",
    methods: ["GET", "POST"],
    description:
      "TheFork Search. Search TheFork restaurants from a full search or city URL and retrieve ratings, cuisine, prices, availability, review summaries, and pagination via browser rendering. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full TheFork search or city listing URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "thomasnet_company",
    title: "Thomasnet Company",
    path: "/v2/thomasnet/company",
    methods: ["GET", "POST"],
    description:
      "Thomasnet Company. Get a full Thomasnet supplier profile from a company URL, including contact details, product categories, and business information. Credit cost: 3 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full Thomasnet company profile URL from your browser.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "thomasnet_search",
    title: "Thomasnet Search",
    path: "/v2/thomasnet/search",
    methods: ["GET", "POST"],
    description:
      "Thomasnet Search. Search Thomasnet suppliers from a search or category URL and get company listings, filters, name suggestions, and pagination. Credit cost: 3 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full Thomasnet search URL from your browser.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "ticketmaster_event",
    title: "Ticketmaster Event",
    path: "/v2/ticketmaster/event",
    methods: ["GET", "POST"],
    description:
      "Ticketmaster Event. Fetch one Ticketmaster event from a slugged event URL. The slug is searched and the matching event id is returned with the venue address. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. Slugged event URL, example https://www.ticketmaster.com/suns-vs-jazz-kids-day-phoenix-arizona-01-24-2027/event/19006507A7257EEA. A short /event/{discoveryId} link has no slug and cannot be resolved.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "ticketmaster_search",
    title: "Ticketmaster Search",
    path: "/v2/ticketmaster/search",
    methods: ["GET", "POST"],
    description:
      "Ticketmaster Search. Search Ticketmaster events by keyword. Returns event cards, including Ticketweb partner rows, and pagination. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. Keyword, example jazz, or a ticketmaster.com search URL such as https://www.ticketmaster.com/search?q=jazz. An event URL is rejected.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Optional. Page number starting at 1. Example: 2. Defaults to 1. On ticketmaster.com the page query is zero-based, so API page 2 is page=1 on the site.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "tiktoktopads_ad",
    title: "TikTok Top Ads Ad",
    path: "/v2/tiktoktopads/ad",
    methods: ["GET", "POST"],
    description:
      "TikTok Top Ads Ad. Get one TikTok Creative Center Top Ad by URL or id: creative, landing page, CTR, and engagement (1 credit). Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Ad id or detail URL from search.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "tiktoktopads_search",
    title: "TikTok Top Ads Search",
    path: "/v2/tiktoktopads/search",
    methods: ["GET", "POST"],
    description:
      "TikTok Top Ads Search. Search TikTok Creative Center Top Ads by region, objective, period, and keyword. Returns ad cards and pagination (1 credit). Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: false,
        description: "Full TikTok Top Ads search URL, or a keyword.",
      },
      {
        name: "keyword",
        type: "string",
        required: false,
        description: "Brand or product keyword.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description: "ISO country code (country_code).",
      },
      {
        name: "objective",
        type: "string",
        required: false,
        description: "Campaign objective id (URL param object).",
      },
      {
        name: "period",
        type: "string",
        required: false,
        description: "Lookback window: 7, 30, or 180.",
        default: "30",
      },
      {
        name: "order_by",
        type: "string",
        required: false,
        description: "Sort: for_you, reach/impression, ctr/like.",
      },
      {
        name: "industry",
        type: "string",
        required: false,
        description: "Industry key filter.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number.",
      },
      {
        name: "per_page",
        type: "number",
        required: false,
        description: "Page size (max 20).",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "tradeaplane_listing",
    title: "Trade-A-Plane Listing",
    path: "/v2/tradeaplane/listing",
    methods: ["GET", "POST"],
    description:
      "Trade-A-Plane Listing. Read one Trade-A-Plane aircraft listing from its URL. You get the asking price, the airframe details, and the seller. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Listing URL that includes listing_id.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "tradeaplane_search",
    title: "Trade-A-Plane Search",
    path: "/v2/tradeaplane/search",
    methods: ["GET", "POST"],
    description:
      "Trade-A-Plane Search. Search Trade-A-Plane aircraft listings by keyword and page the results. Cards include title, price, and the listing link. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Keyword, or a Trade-A-Plane search URL without listing_id.",
      },
      {
        name: "listing_type",
        type: "string",
        required: false,
        description:
          "aircraft or engine when query is a keyword. Ignored when query is a URL.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page from 1. Sent as s-page.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "trustpilot_company_info",
    title: "Trustpilot Company Info",
    path: "/v2/trustpilot/company/info",
    methods: ["GET", "POST"],
    description:
      "Trustpilot Company Info. Retrieve Trustpilot company profile data, including trust score, star rating, categories, contact info, and review response behavior. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "A Trustpilot company URL or domain name.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "untappd_beer",
    title: "Untappd Beer",
    path: "/v2/untappd/beer",
    methods: ["GET", "POST"],
    description:
      "Untappd Beer. Read one Untappd beer, including ABV, IBU, and brewery. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. The numeric Untappd beer id from search, or a beer URL under /b/ or /beer/. A keyword is not accepted.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "untappd_search",
    title: "Untappd Search",
    path: "/v2/untappd/search",
    methods: ["GET", "POST"],
    description:
      "Untappd Search. Search Untappd beers by keyword. Cards include brewery, ABV, and IBU. next is null when Untappd does not expose a next page. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. A beer keyword, or an Untappd search URL whose path is /search.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "upwork_freelancer",
    title: "Upwork Freelancer",
    path: "/v2/upwork/freelancer",
    methods: ["GET", "POST"],
    description:
      "Upwork Freelancer. Upwork Freelancer API: fetch public freelancer profile data from a profile ID, username or URL. Returns bio, hourly rate, skills, ratings and agency info via browser rendering. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Upwork freelancer profile ID, username, or full profile URL.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML page source as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "upwork_jobs",
    title: "Upwork Jobs",
    path: "/v2/upwork/jobs",
    methods: ["GET", "POST"],
    description:
      "Upwork Jobs. Upwork Jobs API: search freelance job listings by skill slug or URL. Returns budgets, skills, experience level and pagination via browser rendering. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Upwork skill slug or full freelance-jobs URL.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML page source as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "upwork_services",
    title: "Upwork Services",
    path: "/v2/upwork/services",
    methods: ["GET", "POST"],
    description:
      "Upwork Services. Upwork Services API: browse Project Catalog listings by category slug or URL. Returns prices, product IDs and pagination via browser rendering. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Upwork Project Catalog category slug or full services URL.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML page source as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "upwork_services_info",
    title: "Upwork Services Info",
    path: "/v2/upwork/services/info",
    methods: ["GET", "POST"],
    description:
      "Upwork Services Info. Upwork Services Info API: fetch Project Catalog product details from a product URL. Returns packages, pricing, seller, media and breadcrumbs via browser rendering. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full Upwork Project Catalog product URL.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML page source as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "usage",
    title: "Usage",
    path: "/v2/usage",
    methods: ["GET"],
    description:
      "Usage. Retrieve real-time usage statistics and credit balance for your Piloterr account.",
    params: [],
  },
  {
    name: "usaspending_award",
    title: "USAspending Award",
    path: "/v2/usaspending/award",
    methods: ["GET", "POST"],
    description:
      "USAspending Award. Fetch one US federal award by its generated id or by a usaspending.gov award URL. Amounts are a number plus a display string. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. Generated award id or a usaspending.gov/award URL. Example: CONT_AWD_GSFC0198106DNAS526555_8000_-NONE-_-NONE-.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "usaspending_search",
    title: "USAspending Search",
    path: "/v2/usaspending/search",
    methods: ["GET", "POST"],
    description:
      "USAspending Search. Search US federal awards by keyword. award_type selects one group: contract (default), grant, idv, or loan. Amounts are a number plus a display string. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. Keyword or a usaspending.gov search URL. Example: software. An award URL returns 400.",
      },
      {
        name: "award_type",
        type: "string",
        required: false,
        description:
          "Optional. One group: contract (default when omitted), grant, idv, or loan. Example: grant.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Optional. Page number from 1. Example: 2. Defaults to 1. Each page has 10 awards. total_results stays null.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "vestiairecollective_product",
    title: "Vestiaire Collective Product",
    path: "/v2/vestiairecollective/product",
    methods: ["GET", "POST"],
    description:
      "Vestiaire Collective Product. Fetch one Vestiaire Collective listing by product URL. The response is a flat object with price, size, condition, and seller. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "A vestiairecollective.com product URL ending in the item id and .shtml. The response is one flat listing. price is the number on the page and price_display is that amount as written. A keyword or a search URL returns 400.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          "Default false. true replaces the listing with result, the rendered HTML.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "vestiairecollective_search",
    title: "Vestiaire Collective Search",
    path: "/v2/vestiairecollective/search",
    methods: ["GET", "POST"],
    description:
      "Vestiaire Collective Search. Search Vestiaire Collective by keyword or catalog URL. Each card has brand, name, price, size, and a product link. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "A keyword or a vestiairecollective.com search or category URL. Empty, another host, or a product URL returns 400. A keyword searches www.vestiairecollective.com. A full URL keeps its host. Each card has price as a number and price_display as the label on the card.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page number starting at 1. Omit it for page 1, which has no /p-N/ segment. Page 2 requests /p-2/ and sets pagination.page to 2. pagination.next is the next catalog URL, or null on the last page. A value below 1 returns 400.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          "Default false. true replaces results and pagination with result, the rendered HTML.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "vinted_item",
    title: "Vinted Item",
    path: "/v2/vinted/item",
    methods: ["GET", "POST"],
    description:
      "Vinted Item. Fetch a Vinted listing by item URL or numeric ID. Parses the public item page (Next.js payload), returns a normalized snake_case object with photos, attributes, shipping, pricing, and optional seller profile. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Vinted item URL or numeric item ID.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Force the Vinted domain when query is a bare item ID only.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "vinted_search",
    title: "Vinted Search",
    path: "/v2/vinted/search",
    methods: ["GET", "POST"],
    description:
      "Vinted Search. Search Vinted second-hand listings by keyword or catalog URL across vinted.fr, vinted.com and other domains. Returns results and pagination. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Search keyword or full Vinted catalog URL. Filters from the URL query string are forwarded to the internal Vinted API.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number. Default 1.",
      },
      {
        name: "per_page",
        type: "number",
        required: false,
        description: "Results per page. Default 24.",
      },
      {
        name: "order",
        type: "string",
        required: false,
        description: "Optional sort order.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description: "Force the Vinted domain when query is a keyword only.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "vinted_user_info",
    title: "Vinted User Info",
    path: "/v2/vinted/user/info",
    methods: ["GET", "POST"],
    description:
      "Vinted User Info. Retrieve public Vinted seller profile by member URL or user ID. Returns the raw /api/v2/users/{id} object: login, photo, feedback stats, followers, verification, bundle discounts, and listing counts. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Vinted member profile URL, direct API URL, or numeric user ID.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "vivareal_property",
    title: "Viva Real Property",
    path: "/v2/vivareal/property",
    methods: ["GET", "POST"],
    description:
      "Viva Real Property. Read one Viva Real property from its URL. The price follows the operation of that URL, so a sale link stays a sale price. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Viva Real listing URL under /imovel/ with an id- number.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "vivareal_search",
    title: "Viva Real Search",
    path: "/v2/vivareal/search",
    methods: ["GET", "POST"],
    description:
      "Viva Real Search. Search Viva Real by city and operation, sale or rent. Page with pagina. Development cards and 'from' prices are left out. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "City, City plus UF, or a Viva Real search URL.",
      },
      {
        name: "operation",
        type: "string",
        required: false,
        description: "Sale or rent when query is a city.",
        default: "sale",
      },
      {
        name: "property_type",
        type: "string",
        required: false,
        description: "Optional type when query is a city.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page from 1. Placeholder 2. Viva Real receives this as pagina=2. Page 1 and page 2 return different listings. A few featured ids can repeat. Most ids on page 2 are new.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "walmart_product",
    title: "Walmart Product",
    path: "/v2/walmart/product",
    methods: ["GET", "POST"],
    description:
      "Walmart Product. Extract full Walmart product page (PDP) data from a /ip/ URL: pricing, ratings, images, fulfillment, specs, badges, and availability via browser rendering. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full Walmart product page URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "walmart_search",
    title: "Walmart Search",
    path: "/v2/walmart/search",
    methods: ["GET", "POST"],
    description:
      "Walmart Search. Scrape Walmart.com search result pages from a full URL and retrieve product cards with pricing, ratings, availability, and pagination via browser rendering. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full Walmart search results URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "walmart_suggest",
    title: "Walmart Suggest",
    path: "/v2/walmart/suggest",
    methods: ["GET", "POST"],
    description:
      "Walmart Suggest. Get Walmart.com search autocomplete suggestions for a keyword via browser rendering, with optional US ZIP code localization. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Search keyword for Walmart autocomplete suggestions.",
      },
      {
        name: "zipcode",
        type: "string",
        required: false,
        description:
          "Optional US ZIP code to localize Walmart store and inventory context for suggestions.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "website_antibot",
    title: "Website Antibot",
    path: "/v2/website/antibot",
    methods: ["GET"],
    description:
      "Website Antibot. Detect which anti-bot protection protects a website before you scrape. Get the vendor, confidence level, and matching clues from a single URL check. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Full URL or domain name to analyze for anti-bot protection. Must be a valid hostname.",
      },
      {
        name: "timeout",
        type: "number",
        required: false,
        description: "Maximum request timeout in seconds. Defaults to 15.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "website_crawler",
    title: "Website Crawler",
    path: "/v2/website/crawler",
    methods: ["GET", "POST"],
    description:
      "Website Crawler. Fetch public pages with fast HTTP crawling (no JavaScript). Best first choice for static or server-rendered HTML; use Rendering or WebUnlocker when JS or anti-bot blocks you. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "A public website URL to fetch with the Crawler engine (HTTP only, no JavaScript). Must include http:// or https://.",
      },
      {
        name: "allow_redirects",
        type: "boolean",
        required: false,
        description:
          "Controls whether the crawler should follow HTTP redirects.",
        default: true,
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          "Controls whether the response returns the raw, unprocessed HTML source of the page.",
        default: false,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "website_email_phone_extractor",
    title: "Website Email Phone Extractor",
    path: "/v2/website/email_phone_extractor",
    methods: ["GET", "POST"],
    description:
      "Website Email Phone Extractor. Extract emails and phone numbers from websites for comprehensive contact details, including social media profiles across 12+ platforms. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          'A website URL to crawl for contact information. Must include the http:// or https:// protocol. The crawler will follow internal links ("a" anchors) to find contact details across the site.',
      },
      {
        name: "country_code",
        type: "string",
        required: false,
        description:
          "An ISO 3166-1 alpha-2 country code used to improve the accuracy of phone number validation and parsing.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "website_rendering",
    title: "Website Rendering",
    path: "/v2/website/rendering",
    methods: ["GET", "POST"],
    description:
      "Website Rendering. Render JavaScript-heavy pages in a headless browser and return post-render HTML. Use when Crawler returns empty DOM; escalate to WebUnlocker if bot protection blocks the session. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "A public website URL to render in a headless browser. Must include http:// or https://.",
      },
      {
        name: "wait_in_seconds",
        type: "number",
        required: false,
        description:
          "Number of seconds to wait after page load before returning the rendered HTML. Useful for pages with delayed rendering or animations.",
        default: 0,
      },
      {
        name: "wait_for",
        type: "string",
        required: false,
        description:
          "A CSS or XPath selector to wait for before returning the rendered HTML. The headless browser will hold the response until the specified element appears in the DOM.",
      },
      {
        name: "block_ads",
        type: "boolean",
        required: false,
        description:
          "Controls whether the headless browser should block ad requests during rendering.",
        default: false,
      },
      {
        name: "timeout",
        type: "number",
        required: false,
        description:
          "Maximum number of seconds to wait for the page to fully load before returning whatever has been rendered so far.",
        default: 30,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "website_screenshot",
    title: "Website Screenshot",
    path: "/v2/website/screenshot",
    methods: ["GET", "POST"],
    description:
      "Website Screenshot. Browser-like Screenshot API that captures webpages as PNG/JPEG/WebP or PDF for previews, QA, reporting, monitoring, and archiving no headless setup. Credit cost: 2 credits per call.",
    params: [
      {
        name: "url",
        type: "string",
        required: true,
        description:
          "The URL of the webpage to capture. Examples:  https://www.amazon.com/s?k=pokemon ",
      },
      {
        name: "format",
        type: "string",
        required: false,
        description: "The output format of the screenshot.",
        enum: ["jpeg", "jpg", "pdf", "png", "webp"],
        default: "png",
      },
      {
        name: "device",
        type: "string",
        required: false,
        description: "The device type to emulate for the screenshot.",
        enum: [
          "galaxy_fold4",
          "galaxy_s23",
          "galaxy_s23_ultra",
          "galaxy_s8",
          "huawei_mate_50_pro",
          "huawei_p60_pro",
          "ipad",
          "iphone_12",
          "iphone_13_mini",
          "iphone_13_pro_max",
          "iphone_14_pro",
          "iphone_14_pro_max",
          "iphone_x",
          "pixel_5",
          "pixel_6a",
          "pixel_7_pro",
          "redmi_note_11",
          "redmi_note_12_pro",
        ],
      },
      {
        name: "full_page",
        type: "boolean",
        required: false,
        description:
          "Capture the entire page instead of just the visible viewport.",
        default: false,
      },
      {
        name: "full_page_scroll",
        type: "boolean",
        required: false,
        description:
          "Scroll the page to fully load lazy-loaded elements before capturing a full-page screenshot.",
        default: false,
      },
      {
        name: "full_page_scroll_duration",
        type: "number",
        required: false,
        description:
          "Time in milliseconds for scrolling before capturing the full page.",
        default: 400,
      },
      {
        name: "viewport_width",
        type: "number",
        required: false,
        description: "The width of the browser viewport in pixels.",
        default: 1280,
      },
      {
        name: "viewport_height",
        type: "number",
        required: false,
        description: "The height of the browser viewport in pixels.",
        default: 1024,
      },
      {
        name: "scale_factor",
        type: "number",
        required: false,
        description: "The scale factor for high-resolution screenshots.",
        default: 1,
      },
      {
        name: "image_quality",
        type: "string",
        required: false,
        description: "Generate images with custom quality settings.",
        default: "80",
      },
      {
        name: "selector",
        type: "string",
        required: false,
        description:
          "Capture a specific element on the page instead of the full viewport.",
      },
      {
        name: "cache",
        type: "boolean",
        required: false,
        description: "Cache the response.",
        default: false,
      },
      {
        name: "cache_ttl",
        type: "number",
        required: false,
        description: "Cache the response for a custom TTL (in seconds).",
        default: 2592000,
      },
      {
        name: "remove_selectors",
        type: "string",
        required: false,
        description:
          "A comma-separated list of elements to hide before capturing (e.g., ads, popups).",
      },
      {
        name: "remove_cookie_banners",
        type: "boolean",
        required: false,
        description: "Automatically remove cookie banners before capturing.",
        default: false,
      },
      {
        name: "remove_ads",
        type: "boolean",
        required: false,
        description: "Automatically remove ads before capturing.",
        default: false,
      },
      {
        name: "block_resources",
        type: "string",
        required: false,
        description:
          "Comma-separated list of resource types to block (e.g., “image,stylesheet,font”).",
        enum: [
          "document",
          "eventsource",
          "fetch",
          "font",
          "image",
          "manifest",
          "media",
          "other",
          "script",
          "stylesheet",
          "texttrack",
          "websocket",
          "xhr",
        ],
      },
      {
        name: "block_urls",
        type: "string",
        required: false,
        description:
          "Comma-separated list of URL patterns to block (e.g., “analytics,tracking,advertisement”).",
      },
      {
        name: "delay",
        type: "number",
        required: false,
        description: "Delay in seconds before capturing the screenshot.",
        default: 0,
      },
      {
        name: "wait_until",
        type: "array",
        required: false,
        description: "Define when to capture.",
        items: "string",
        enum: ["domcontentloaded", "load", "networkidle0", "networkidle2"],
      },
      {
        name: "wait_for_selector",
        type: "string",
        required: false,
        description:
          "Wait for a specific element to appear before taking the screenshot.",
      },
      {
        name: "proxy",
        type: "string",
        required: false,
        description: "Specify a proxy server to route your request through.",
      },
      {
        name: "s3_secret_key",
        type: "string",
        required: false,
        description: "AWS S3 secret access key.",
      },
      {
        name: "s3_access_key_id",
        type: "string",
        required: false,
        description: "AWS S3 access key ID.",
      },
      {
        name: "s3_bucket",
        type: "string",
        required: false,
        description:
          "The S3 bucket name where the screenshot will be uploaded.",
      },
      {
        name: "s3_object_key",
        type: "string",
        required: false,
        description:
          "The filename for the S3 object (auto-generated if not provided).",
      },
      {
        name: "s3_region",
        type: "string",
        required: false,
        description: "AWS S3 region for storage.",
      },
      {
        name: "storage_endpoint",
        type: "string",
        required: false,
        description:
          "Leave this field empty for AWS S3. Only specify a value if required. S3-compatible storage services are supported, for example, use https://<accountId>.r2.cloudflarestorage.com for Cloudflare R2.",
      },
      {
        name: "s3_url",
        type: "boolean",
        required: false,
        description:
          "Use S3 storage for screenshots. The S3 URL will be returned in the response.",
        default: false,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "website_technology",
    title: "Website Technology",
    path: "/v2/website/technology",
    methods: ["GET", "POST"],
    description:
      "Website Technology. Identify the technologies behind any website CMS, frameworks, analytics, CDN, hosting, and more, for competitive market analysis and technological insight. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "A website URL to analyze for technology stack detection. Must include the http:// or https:// protocol.",
      },
      {
        name: "mode",
        type: "string",
        required: false,
        description:
          "Controls the level of detail returned in the technology detection response.",
        default: "expert",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "website_webunlocker",
    title: "Website WebUnlocker",
    path: "/v2/website/webunlocker",
    methods: ["GET", "POST"],
    description:
      "Website WebUnlocker. Bypass advanced anti-bot systems (Cloudflare, DataDome, Akamai, PerimeterX) on whitelisted domains. Combines browser rendering and unlock tooling; use after Crawler and Rendering fail. Credit cost: 3 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "A public website URL to unlock with the WebUnlocker engine. Must include http:// or https://. The target domain must be on Piloterr's approved whitelist.",
      },
      {
        name: "allow_redirects",
        type: "boolean",
        required: false,
        description:
          "Controls whether the WebUnlocker engine should follow HTTP redirects.",
        default: true,
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          "Controls whether the response returns the raw, unprocessed HTML source of the page.",
        default: false,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "weibo_post_info",
    title: "Weibo Post Info",
    path: "/v2/weibo/post/info",
    methods: ["GET", "POST"],
    description:
      "Weibo Post Info. Retrieve one public Weibo post by post id, including text, images, publish time, engagement counts, and author profile. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Weibo post id.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "weibo_search",
    title: "Weibo Search",
    path: "/v2/weibo/search",
    methods: ["GET", "POST"],
    description:
      "Weibo Search. Search public Weibo posts by keywords. Each post includes the author, text, publish time, engagement counts, image, and video link. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Keywords to search, such as AI.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page number, starting at 1. Default 1. Page 2 is the next slice of the same keywords.",
        default: 1,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "welcometothejungle_company",
    title: "Welcome to the Jungle Company",
    path: "/v2/welcometothejungle/company",
    methods: ["GET", "POST"],
    description:
      "Welcome to the Jungle Company. Welcome to the Jungle company profile: headcount, offices, sectors and website (1 credit). Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Slug, company name, or a Welcome to the Jungle company URL.",
      },
      {
        name: "language",
        type: "string",
        required: false,
        description:
          "fr (default) or en. en-gb and en-us count as en. Chooses the language of the profile text and URL.",
        default: "fr",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "welcometothejungle_search",
    title: "Welcome to the Jungle Search",
    path: "/v2/welcometothejungle/search",
    methods: ["GET", "POST"],
    description:
      "Welcome to the Jungle Search. Search Welcome to the Jungle jobs. Returns offer cards and pagination (1 credit). Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Job keyword or a Welcome to the Jungle jobs-search URL.",
      },
      {
        name: "language",
        type: "string",
        required: false,
        description:
          "fr (default) or en. en-gb and en-us count as en. A /fr/ or /en/ path in the URL overrides this.",
        default: "fr",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page from 1, 30 offers. A page value already in the URL overrides this.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "wellfound_company_info",
    title: "Wellfound Company Info",
    path: "/v2/wellfound/company/info",
    methods: ["GET", "POST"],
    description:
      "Wellfound Company Info. Retrieve startup and company data from Wellfound (formerly AngelList), including description, funding, team size, hiring status, and social links. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "A Wellfound company URL or company slug.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "x_post_info",
    title: "X Post Info (twitter)",
    path: "/v2/x/post/info",
    methods: ["GET", "POST"],
    description:
      "X Post Info (twitter). X Post Info API: fetch public tweet data (text, likes, retweets, views, media) from a status URL or tweet ID via browser rendering. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "X tweet to retrieve. Accepts a full status URL or numeric tweet ID.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML page source as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "x_profile_info",
    title: "X Profile Info (twitter)",
    path: "/v2/x/profile/info",
    methods: ["GET", "POST"],
    description:
      "X Profile Info (twitter). X Profile Info API: fetch public X/Twitter profile data (bio, followers, verification, avatars) from a username or URL via browser rendering. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "X profile to look up. Accepts a username, @handle, or profile URL.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the raw HTML page source as {"result": "..."} instead of structured JSON. Defaults to false.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "yahoo_search",
    title: "Yahoo Search",
    path: "/v2/yahoo/search",
    methods: ["GET", "POST"],
    description:
      "Yahoo Search. Query Yahoo via API and retrieve structured organic results with country and language. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Search query sent to Yahoo Search.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description: "Page number. Page 1 is the first page of results.",
        default: 1,
      },
      {
        name: "gl",
        type: "string",
        required: false,
        description: "Country code, for example us, fr, gb, de, jp.",
      },
      {
        name: "hl",
        type: "string",
        required: false,
        description: "Language code, for example en, fr, de, ja, zh.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "yellowpages_business",
    title: "Yellowpages Business",
    path: "/v2/yellowpages/business",
    methods: ["GET", "POST"],
    description:
      "Yellowpages Business. Extract a full Yellow Pages business profile from a listing URL, including phone, website, categories, and ratings via browser rendering. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full Yellow Pages business listing URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "yellowpages_search",
    title: "Yellowpages Search",
    path: "/v2/yellowpages/search",
    methods: ["GET", "POST"],
    description:
      "Yellowpages Search. Search Yellow Pages businesses from a full search URL and retrieve names, phones, addresses, ratings, opening hours, and pagination via browser rendering. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full Yellow Pages search URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "yelp_business",
    title: "Yelp Business",
    path: "/v2/yelp/business",
    methods: ["GET", "POST"],
    description:
      "Yelp Business. Fetch a Yelp business profile from a full business URL with phone, address, website, logo, hours, and claim status. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full Yelp business URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "yelp_reviews",
    title: "Yelp Reviews",
    path: "/v2/yelp/reviews",
    methods: ["GET", "POST"],
    description:
      "Yelp Reviews. Fetch paginated Yelp reviews for a business with rating, text, author profile, reactions, and attached photos or videos. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Yelp business ID / encid.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page number. Each page returns up to 10 reviews. Default: 1.",
        default: 1,
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "yelp_search",
    title: "Yelp Search",
    path: "/v2/yelp/search",
    methods: ["GET", "POST"],
    description:
      "Yelp Search. Search Yelp by keyword and location and retrieve paginated business cards with ratings, categories, photos, and sponsored flags. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Full Yelp search URL with find_desc and find_loc query parameters.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "zapimoveis_ad",
    title: "Zap Imóveis Ad",
    path: "/v2/zapimoveis/ad",
    methods: ["GET", "POST"],
    description:
      "Zap Imóveis Ad. Get a full Zap Imóveis listing by URL: price, IPTU, features, coordinates, images, and publisher (1 credit). Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Full Zap Imóveis listing URL. Accepts /imovel/ and /lancamentos/.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "zapimoveis_search",
    title: "Zap Imóveis Search",
    path: "/v2/zapimoveis/search",
    methods: ["GET", "POST"],
    description:
      "Zap Imóveis Search. Search Zap Imóveis listings by city or search URL. Returns prices, IPTU, condominium fees, rooms, and pagination (1 credit). Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "City, City, UF, neighborhood, or full Zap Imóveis search URL.",
      },
      {
        name: "operation",
        type: "string",
        required: false,
        description:
          "Transaction type. Used when query is a city. Ignored as a path builder when query is a full URL.",
        default: "sale",
      },
      {
        name: "property_type",
        type: "string",
        required: false,
        description: "Property type. Used when query is a city.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page number (1-based). Default: 1. Values above 1 set pagina on the URL.",
        default: 1,
      },
      {
        name: "min_price",
        type: "number",
        required: false,
        description: "Minimum asking price in BRL.",
      },
      {
        name: "max_price",
        type: "number",
        required: false,
        description: "Maximum asking price in BRL.",
      },
      {
        name: "min_area",
        type: "number",
        required: false,
        description: "Minimum area in m².",
      },
      {
        name: "max_area",
        type: "number",
        required: false,
        description: "Maximum area in m².",
      },
      {
        name: "min_bedrooms",
        type: "number",
        required: false,
        description: "Minimum bedroom count.",
      },
      {
        name: "min_bathrooms",
        type: "number",
        required: false,
        description: "Minimum bathroom count.",
      },
      {
        name: "min_parking",
        type: "number",
        required: false,
        description: "Minimum parking spaces.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "zazzle_product",
    title: "Zazzle Product",
    path: "/v2/zazzle/product",
    methods: ["GET", "POST"],
    description:
      "Zazzle Product. Fetch one Zazzle product by its product URL or by a slug that ends in the numeric product id. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. Product URL or slug ending in the numeric product id. Example: https://www.zazzle.com/branded_logo_two_tone_coffee_mug-256528848440338952.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "zazzle_search",
    title: "Zazzle Search",
    path: "/v2/zazzle/search",
    methods: ["GET", "POST"],
    description:
      "Zazzle Search. Search Zazzle products by keyword. page maps to the pg parameter. Prices are a number plus a display string. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Required. Keyword or a zazzle.com/s search URL. Example: coffee mug. A product URL returns 400.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Optional. Page number from 1. Example: 2. Maps to the Zazzle pg parameter. Defaults to 1.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "zillow_property",
    title: "Zillow Property",
    path: "/v2/zillow/property",
    methods: ["GET", "POST"],
    description:
      "Zillow Property. Extract full property details from a Zillow homedetails URL, including specs, photos, schools, tax history, and agent attribution. Credit cost: 3 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full Zillow homedetails URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "zillow_search",
    title: "Zillow Search",
    path: "/v2/zillow/search",
    methods: ["GET", "POST"],
    description:
      "Zillow Search. Search Zillow listings from a search or map URL and retrieve prices, beds, baths, coordinates, and listing status. Credit cost: 3 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full Zillow search or map results URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "zonaprop_property",
    title: "ZonaProp Property",
    path: "/v2/zonaprop/property",
    methods: ["GET", "POST"],
    description:
      "ZonaProp Property. Read one ZonaProp listing from its URL. You get the asking price in USD or ARS, the address, and the publisher. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "ZonaProp listing URL under /propiedades/clasificado/.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "zonaprop_search",
    title: "ZonaProp Search",
    path: "/v2/zonaprop/search",
    methods: ["GET", "POST"],
    description:
      "ZonaProp Search. Search ZonaProp for apartments or houses in an Argentine city. Page with pagina. A few featured ads can repeat. Development projects priced 'from' are left out. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Place or a ZonaProp search URL.",
      },
      {
        name: "operation",
        type: "string",
        required: false,
        description: "Sale or rent when query is a place.",
      },
      {
        name: "property_type",
        type: "string",
        required: false,
        description: "Kind of property. Default departamentos.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page from 1. ZonaProp writes this into the path as -pagina-N.html.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "zoopla_property",
    title: "Zoopla Property",
    path: "/v2/zoopla/property",
    methods: ["GET", "POST"],
    description:
      "Zoopla Property. Extract full property details from a Zoopla listing URL, including price, specs, photo gallery, EPC rating, coordinates, and agent data. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full Zoopla property detail URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "zoopla_search",
    title: "Zoopla Search",
    path: "/v2/zoopla/search",
    methods: ["GET", "POST"],
    description:
      "Zoopla Search. Search Zoopla listings from a search URL and retrieve prices, specs, photos, agency info, and pagination. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Full Zoopla search results URL.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "zooplus_product",
    title: "Zooplus Product",
    path: "/v2/zooplus/product",
    methods: ["GET", "POST"],
    description:
      "Zooplus Product. Read one Zooplus product by id or URL, in the region of that shop. Variants keep their own price and EAN. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "A product link, a /shop/.../{id} path, or the product number.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Which country shop when query is a number or a path. fr is France (default). de is Germany. uk is the United Kingdom.",
        default: "fr",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          "Set to true to get the raw HTML in result instead of the product.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "zooplus_search",
    title: "Zooplus Search",
    path: "/v2/zooplus/search",
    methods: ["GET", "POST"],
    description:
      "Zooplus Search. Search a Zooplus country shop by keyword. Region defaults to France. Page through food, litter, and accessory cards with local prices. Credit cost: 1 credit per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "What to look for. A word, or a Zooplus search link.",
      },
      {
        name: "region",
        type: "string",
        required: false,
        description:
          "Which country shop. fr is France (default, www.zooplus.fr). de is Germany (www.zooplus.de). uk is the United Kingdom (www.zooplus.co.uk).",
        default: "fr",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Which page of results, starting at 1. Page 2 uses p=2 and returns different products.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          "Set to true to get the raw HTML in result instead of the product list.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "zoro_product",
    title: "Zoro Product",
    path: "/v2/zoro/product",
    methods: ["GET", "POST"],
    description:
      "Zoro Product. Get a Zoro product page: title, brand, USD price, Zoro number, manufacturer number, images, and specifications. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Zoro product URL, or a path that contains /i/G....",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          'When true, return the rendered HTML as {"result": "..."} instead of JSON.',
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
  {
    name: "zoro_search",
    title: "Zoro Search",
    path: "/v2/zoro/search",
    methods: ["GET", "POST"],
    description:
      "Zoro Search. Search Zoro by keyword or category URL. Returns product cards with USD price, brand, Zoro number, and pagination. Credit cost: 2 credits per call.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Keyword, or a Zoro search or category URL. Empty, another host, or a product URL returns 400. A keyword builds /search?q=.... Each card has price as a USD number and price_display as the dollar string.",
      },
      {
        name: "page",
        type: "number",
        required: false,
        description:
          "Page number starting at 1. Omit it for page 1. Page 2 adds page=2, sets pagination.page to 2, and returns the next cards. pagination.next is the next page URL, or null on the last page. A value below 1 returns 400.",
      },
      {
        name: "return_page_source",
        type: "boolean",
        required: false,
        description:
          "Default false. true replaces results and pagination with result, the rendered HTML.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
    ],
  },
];
