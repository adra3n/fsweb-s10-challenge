import React from 'react'
import { formatDistanceToNow } from 'date-fns'
import { tr } from 'date-fns/locale'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { notSilAPI } from '../actions'

export default function Post({ item }) {
  const dispatch = useDispatch()

  function handleSil(e) {
    // burada ilgili eylemi dispatch edin
    // sonra toast mesajı gösterin

    e.preventDefault()

    dispatch(notSilAPI(item.id))
    toast('Not silindi')
  }

  return (
    <div className="beyazKutu p-8 pb-6 mb-4 text-sm">
      <h1>
        {formatDistanceToNow(new Date(item.date), {
          addSuffix: true,
          locale: tr,
        })}
      </h1>

      {item.body.split('|').map((li) => (
        <p className="mt-2" key={li}>
          - {li}
        </p>
      ))}

      <button
        className="text-xs text-amber-600 mt-4 underline"
        onClick={handleSil}
      >
        Bu notu sil
      </button>
    </div>
  )
}
