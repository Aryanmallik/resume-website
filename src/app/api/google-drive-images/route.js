export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const folderId = searchParams.get("folderId");

  if (!folderId) {
    return Response.json({ error: "folderId is required" }, { status: 400 });
  }

  try {
    const apiKey = process.env.GOOGLE_API_KEY;
    const url = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${apiKey}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Google API error: ${response.status}`);
    }

    const json = await response.json();
    const data = json.files.map((file) => ({ name: file.name, id: file.id }));
    return Response.json(data);
  } catch (error) {
    console.error("Error fetching images:", error);
    return Response.json({ error: "Failed to fetch images" }, { status: 500 });
  }
}
