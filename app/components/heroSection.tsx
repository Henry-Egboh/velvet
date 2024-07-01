import { revalidatePath } from "next/cache";

async function fetchData() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
const res = await fetch("https://api.restful-api.dev/objects", {next: {revalidate: 1800}});
  //   const data = await response.json();
  //   console.log(data);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Hero() {
  const phoneData = await fetchData();
//   console.log(data);
  return (
    <header>
      <h1>hero section</h1>
      <p>{phoneData[9].name}</p>
      <p>{phoneData[9].data.Capacity}</p>
      <p>{phoneData[9].data["Screen size"]}</p>
      <div>
        {phoneData.map((dt : any) => (
            <ul key={dt.id}>
                <li>{dt.id}</li>
                <li>{dt.name}</li>
            </ul>
        ))}
      </div>
      {/* <p>{data[0].title}</p> */}
      {/* <div>
        {data.map((item : any) => (
            <ul key={item.id}>
                <li>{item.userId}</li>
                <li>{item.title}</li>
                <li>{item.body}</li>
            </ul>
        ))}
      </div> */}
    </header>
  );
}
