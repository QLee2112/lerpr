export default function exportAsImage(element) {
  const canvas = element
  const image = canvas.toDataURL('image/png', 1.0)
  return image
}
