export async function POST(request) {
    const { name, email, phone, message } = await request.json();
  
    try {
      const response = await fetch(`${process.env.API_URL}/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, message }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        return new Response(JSON.stringify(data), { status: 200 });
      } else {
        return new Response(
          JSON.stringify({
            message: data.message || 'Error submitting contact form.',
          }),
          { status: response.status }
        );
      }
    } catch (error) {
      return new Response(
        JSON.stringify({ message: 'Failed to connect to the API.' }),
        { status: 500 }
      );
    }
  }