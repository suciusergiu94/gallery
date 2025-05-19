import Link from "next/link";

const mockUrls = [
  "https://rh2ghac6gh.ufs.sh/f/gLsoWLRgn1rhgsYZzaRgn1rhWbpuFLUP5Vo2ziDOAjH7qmNJ",
  "https://rh2ghac6gh.ufs.sh/f/gLsoWLRgn1rhIX3BlhaeTwpho69xH1U4GCOfbQFIRlDq5Ndv",
  "https://rh2ghac6gh.ufs.sh/f/gLsoWLRgn1rhYa5ZO9MFT9BMeoLZ3m5zxdvt2p4CG7y8EisQ",
  "https://rh2ghac6gh.ufs.sh/f/gLsoWLRgn1rhPFlYA1epokT61ywth3gjcr2OxFlMmVYHnXua",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url
}))

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages].map((image, index) => (
          <img src={image.url} height={400} width={400} key={index + 1} alt="image" />
        ))}
      </div>
    </main>
  );
}
