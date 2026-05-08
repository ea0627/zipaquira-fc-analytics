import fs from "fs/promises";
import path from "path";

import { parseXml } from "@/lib/hattrick/parsers/parseXml";
import { adaptClub } from "@/lib/hattrick/adapters/adaptClub";

export async function GET() {
  const filePath = path.join(
    process.cwd(),
    "src/lib/hattrick/mock/club.xml"
  );

  const xml = await fs.readFile(filePath, "utf-8");

  const parsed = parseXml(xml);

  const club = adaptClub(parsed);

  return Response.json(club);
}