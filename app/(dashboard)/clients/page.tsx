'use client'

import { useState } from 'react'
import { Search, Plus, X } from 'lucide-react'

interface Client {
  id: number
  name: string
  email: string
  company: string
  status: 'Active' | 'Inactive'
  dateAdded: string
}

const initialClients: Client[] = [
  {
    id: 1,
    name: 'James Whitfield',
    email: 'james@meridian.com',
    company: 'Meridian Corp',
    status: 'Active',
    dateAdded: 'Jan 15, 2024',
  },
  {
    id: 2,
    name: 'Sarah Chen',
    email: 'sarah@northgate.com',
    company: 'Northgate Financial',
    status: 'Active',
    dateAdded: 'Feb 3, 2024',
  },
  {
    id: 3,
    name: 'Marcus Reid',
    email: 'marcus@vanta.io',
    company: 'Vanta Solutions',
    status: 'Inactive',
    dateAdded: 'Mar 22, 2024',
  },
]

export default function ClientsPage() {
  const [clients, setClients] = useState<Client[]>(initialClients)
  const [search, setSearch] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', company: '' })

  const filtered = clients.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.company.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase())
  )

  function handleAdd() {
    if (!form.name || !form.email || !form.company) return
    const newClient: Client = {
      id: Date.now(),
      name: form.name,
      email: form.email,
      company: form.company,
      status: 'Active',
      dateAdded: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
    }
    setClients([...clients, newClient])
    setForm({ name: '', email: '', company: '' })
    setShowModal(false)
  }

  return (
    <div className="px-8 py-8 max-w-5xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-semibold text-[#0a0a0a]">Clients</h1>
          <p className="text-sm text-[#71717a] mt-1">
            Manage your client accounts.
          </p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="btn-primary flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add client
        </button>
      </div>

      {/* Search */}
      <div className="relative mb-5 max-w-xs">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#71717a]" />
        <input
          type="text"
          placeholder="Search clients..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input-field pl-9"
        />
      </div>

      {/* Table */}
      <div className="bg-white border border-[#e4e4e7] rounded-md overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#e4e4e7] bg-[#fafafa]">
              {['Name', 'Email', 'Company', 'Status', 'Date Added'].map((h) => (
                <th
                  key={h}
                  className="px-5 py-3 text-left text-xs font-medium text-[#71717a] uppercase tracking-wider"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#e4e4e7]">
            {filtered.map((client) => (
              <tr key={client.id} className="hover:bg-[#fafafa] transition-colors">
                <td className="px-5 py-3.5 text-sm font-medium text-[#0a0a0a]">
                  {client.name}
                </td>
                <td className="px-5 py-3.5 text-sm text-[#71717a]">
                  {client.email}
                </td>
                <td className="px-5 py-3.5 text-sm text-[#0a0a0a]">
                  {client.company}
                </td>
                <td className="px-5 py-3.5">
                  <span
                    className={
                      client.status === 'Active' ? 'badge-active' : 'badge-inactive'
                    }
                  >
                    {client.status}
                  </span>
                </td>
                <td className="px-5 py-3.5 text-sm text-[#71717a]">
                  {client.dateAdded}
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="px-5 py-8 text-center text-sm text-[#71717a]"
                >
                  No clients found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add Client Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-md border border-[#e4e4e7] w-full max-w-md mx-4 shadow-md">
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#e4e4e7]">
              <h2 className="text-sm font-semibold text-[#0a0a0a]">Add client</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-[#71717a] hover:text-[#0a0a0a] transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="px-6 py-5 space-y-4">
              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-[#0a0a0a]">
                  Full name
                </label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="Jane Smith"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-[#0a0a0a]">
                  Email
                </label>
                <input
                  type="email"
                  className="input-field"
                  placeholder="jane@company.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-[#0a0a0a]">
                  Company
                </label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="Acme Inc."
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                />
              </div>
            </div>
            <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-[#e4e4e7]">
              <button
                onClick={() => setShowModal(false)}
                className="btn-secondary"
              >
                Cancel
              </button>
              <button onClick={handleAdd} className="btn-primary">
                Add client
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
