// crudder help para tener solo una fuente unica de requests y evitar DRY
const crudder = (path: string) => (resource: string) => {
  const url = `${path}/${resource}`;
  return {
    read: async <T extends any>(): Promise<T> => {
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return res.json();
    },
  };
};

export default crudder;
