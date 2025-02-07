export default function handler(req, res) {
  const { email } = req.query;  // Get the email from the query parameters

  // Log the email to the server logs (optional for debugging)
  console.log(`Tracking pixel triggered for email: ${email}`);

  // You can process the email (e.g., save to a database) here if needed

  // Send back an image as the tracking pixel
  res.status(200).send('<img src="https://example.com/pixel.png" width="1" height="1" style="display:none;" />');
}
