import mc from 'minecraft-protocol';

export default function handler(req, res) {
  const server = 'play.trexmine.com';
  const port = 25565;

  mc.ping({ host: server, port: port }, (err, response) => {
    if (err) {
      return res.status(500).json({ error: 'Error fetching data' });
    }
    res.json({
      playersOnline: response.players.online,
    });
  });
}
