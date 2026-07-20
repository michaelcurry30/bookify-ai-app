import { supabase } from '@/lib/supabase'

export default async function Dashboard() {
  const { data: appointments } = await supabase
    .from('appointments')
    .select()
    .order('start_time', { ascending: true })

  const recovered = appointments
    ?.filter(a => a.status === 'filled')
    .reduce((sum, a) => sum + (a.ticket_price || 0), 0)

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Today's schedule</h1>
      <p className="mb-6">Recovered this week: ${recovered || 0}</p>
      <table className="w-full">
        <tbody>
          {appointments?.map(a => (
            <tr key={a.id} className="border-b">
              <td className="py-2">{a.start_time}</td>
              <td>{a.client_name}</td>
              <td>{a.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}