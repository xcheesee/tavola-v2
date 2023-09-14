
export default function AddCategoryModal({modalId}: {modalId: string}) {
    return(
        <dialog id={modalId} className="modal">
            <div className="w-[500px] h-[300px] bg-white rounded-xl p-4 ">
                <p className="self-start justify-self-start text-xl pb-2">Adicionar Categoria</p>
                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                    }}
                    className="grid gap-8 h-full"
                >
                    <div className="grid items-center h-full">
                        <input type="text" className="input input-bordered w-full" placeholder="Categoria"/>

                    </div>
                    <button type="submit" className="btn btn-success">Enviar</button>
                </form>
            </div>
        </dialog>
    )
}