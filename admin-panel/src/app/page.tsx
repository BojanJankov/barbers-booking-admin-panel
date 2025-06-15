export default function Home() {
  return (
    <div className="min-h-screen bg-backgorund text-text px-6 py-10">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Welcome to the Admin Panel
      </h1>

      <p className="text-text mb-6 text-center">
        This is the home page of the administrative panel for the Barbers
        Booking App. Here, you can manage barbers, services, appointments, and
        system settings.
      </p>

      <div className="grid gap-6 mt-10 md:grid-cols-3">
        <div className="bg-[#111827] rounded-xl p-5 border border-border shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Barbers</h2>
          <p className="text-text">View, edit, and manage barber accounts.</p>
        </div>

        <div className="bg-[#111827] rounded-xl p-5  border border-border shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Services</h2>
          <p className="text-text">Administer barber services.</p>
        </div>

        <div className="bg-[#111827] rounded-xl p-5 border border-border shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Appointments</h2>
          <p className="text-text">Track and manage all booked appointments.</p>
        </div>
      </div>
    </div>
  );
}
