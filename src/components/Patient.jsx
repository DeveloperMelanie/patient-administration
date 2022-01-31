import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'

export default function Patient({ patient, setPatient, deletePatient }) {
    const { id, name, owner, email, date, symptoms } = patient

    const handleDelete = () => {
        Swal.fire({
            title: '¿Deseas eliminar este paciente?',
            icon: 'question',
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar',
            showCancelButton: true,
            showCloseButton: true
        }).then(result => {
            if (result.isConfirmed) {
                deletePatient(id)
                Swal.fire({
                    icon: 'success',
                    title: 'El paciente ha sido eliminado',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }

    return (
        <div className='bg-white shadow-md px-5 py-10 rounded-xl my-10'>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Nombre: <span className='font-normal normal-case'>{name}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Propietario:{' '}
                <span className='font-normal normal-case'>{owner}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Email: <span className='font-normal normal-case'>{email}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Fecha alta:{' '}
                <span className='font-normal normal-case'>{date}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Síntomas:{' '}
                <span className='font-normal normal-case'>{symptoms}</span>
            </p>
            <div className='flex justify-between mt-10'>
                <button
                    type='button'
                    className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg transition-all'
                    onClick={() => setPatient(patient)}
                >
                    Editar
                </button>
                <button
                    type='button'
                    className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg transition-all'
                    onClick={handleDelete}
                >
                    Eliminar
                </button>
            </div>
        </div>
    )
}
