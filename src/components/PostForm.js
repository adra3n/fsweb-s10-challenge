import React from 'react'
import { useForm } from 'react-hook-form'
import { nanoid } from 'nanoid'
import { useHistory } from 'react-router'
import Gratitude from './../assets/grForm.png'
import { useDispatch } from 'react-redux'
import { notEkleAPI } from '../actions'
import { toast } from 'react-toastify'

export default function PostForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange' })

  const history = useHistory()
  const dispatch = useDispatch()

  function onSubmit(data) {
    const yeniNot = {
      id: nanoid(),
      date: Date(),
      body: Object.values(data)
        .filter((v) => v !== '')
        .join('|'),
    }

    // burada ilgili eylemi dispatch edin
    // toast mesajı gösterin
    // sonra aşağıdaki satırı aktifleştirin
    // setTimeout(() => history.push("/notlar"), 2000);

    dispatch(notEkleAPI(yeniNot), toast.success('Not Eklendi'))
    setTimeout(() => history.push('/notlar'), 2000)
  }

  const inputCx = 'border border-zinc-300 h-9 rounded-none text-sm px-2 w-full'

  return (
    <div className="flex flex-col sm:flex-row beyazKutu">
      <div className="flex-1">
        <img src={Gratitude} alt="" className="block object-cover h-full" />
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-3 p-8 flex-1"
      >
        <h1>Minnettar hissediyorum, çünkü...</h1>
        <p className="text-xs">
          Minnettar günlüğü notları; her gün teşekkür edilen birkaç şeyi
          listelemekten, minnettar olunan şeylere dair daha uzun ve kapsamlı
          yansıtmalara kadar pek çok şeyden oluşabilir.
        </p>
        <p className="text-stone-700 my-3 text-xs">
          Her gün belli saatlerde 3 maddeden oluşan bir liste yapmak, bu
          alışkanlığa iyi bir başlangıç noktası sayılır.
        </p>
        <div>
          <input
            className={inputCx}
            placeholder="Dışarıda tam en sevdiğim hava var"
            {...register('g1', { required: 'Bu alan zorunludur' })}
          />
          {errors.g1 && (
            <p className="text-sm text-rose-700 py-1">{errors.g1.message}</p>
          )}
        </div>
        <div>
          <input
            className={inputCx}
            placeholder="Kedim beni bu sabah çok erken uyandırmadı :D"
            {...register('g2')}
          />
        </div>
        <div>
          <input
            className={inputCx}
            placeholder="Sevdiğim kurabiyeleri satan dükkan bugün açık"
            {...register('g3')}
          />
        </div>

        <button type="submit" className="myButton">
          Ekle
        </button>
      </form>
    </div>
  )
}
