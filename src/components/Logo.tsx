import Image from 'next/image'

export function Logo() {
  return (
    <div className="flex items-center justify-center mb-8">
      <Image
        src="https://res.cloudinary.com/ds7z5pw52/image/upload/v1735668460/WebElectra_uy0vqr.png" // Replace with your actual logo path
        alt="WebElectra Logo"
        width={250}
        height={250}
        className="rounded-full"
      />
    </div>
  )
}

