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
    create: async <T extends any>(action: string, data: any): Promise<T> => {
      const res = await fetch(`${url}/${action}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return res.json();
    },
  };
};

export default crudder;
