'use client'

import { useState } from 'react'
import { Edit, Save, X } from 'lucide-react'

interface EditableTextProps {
  id: string
  content: string
  type?: 'text' | 'title' | 'description'
  className?: string
  onSave?: (id: string, content: string) => void
  isAdminMode?: boolean
}

export default function EditableText({ 
  id, 
  content, 
  type = 'text', 
  className = '', 
  onSave,
  isAdminMode = false 
}: EditableTextProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editContent, setEditContent] = useState(content)

  const handleSave = () => {
    if (onSave) {
      onSave(id, editContent)
    }
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditContent(content)
    setIsEditing(false)
  }

  if (!isAdminMode) {
    // Modo normal - apenas exibe o conteúdo
    if (type === 'title') {
      return <h2 className={className}>{content}</h2>
    } else if (type === 'description') {
      return <p className={className}>{content}</p>
    } else {
      return <span className={className}>{content}</span>
    }
  }

  // Modo admin - permite edição
  if (isEditing) {
    return (
      <div className="relative group">
        {type === 'description' ? (
          <textarea
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            className={`${className} border-2 border-blue-500 rounded p-2 w-full`}
            rows={3}
            autoFocus
          />
        ) : (
          <input
            type="text"
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            className={`${className} border-2 border-blue-500 rounded p-2 w-full`}
            autoFocus
          />
        )}
        <div className="absolute -top-2 -right-2 flex space-x-1">
          <button
            onClick={handleSave}
            className="bg-green-500 text-white p-1 rounded-full hover:bg-green-600 transition-colors"
          >
            <Save className="h-3 w-3" />
          </button>
          <button
            onClick={handleCancel}
            className="bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
          >
            <X className="h-3 w-3" />
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="relative group">
      {type === 'title' ? (
        <h2 className={className}>{content}</h2>
      ) : type === 'description' ? (
        <p className={className}>{content}</p>
      ) : (
        <span className={className}>{content}</span>
      )}
      
      <button
        onClick={() => setIsEditing(true)}
        className="absolute -top-2 -right-2 bg-blue-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <Edit className="h-3 w-3" />
      </button>
    </div>
  )
}