const int = (val: string | undefined, num: number): number =>
  val ? (isNaN(parseInt(val)) ? num : parseInt(val)) : num;
const bool = (val: string | undefined, bool: boolean): boolean =>
  val == null ? bool : val == 'true';

export const configuration = () => ({
  NODE_ENV: process.env.NODE_ENV ?? 'development',

  database: {
    host: process.env.DB_HOST,
    port: int(process.env.DB_PORT, 3306),
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },

  
});
