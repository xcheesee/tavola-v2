export default function DeleteModal({data={}, id="del-modal"}: {data: {id?: string}, id: string}) {
    return(
        <dialog id={id} className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Deseja Deletar a entrada #{data.id}</h3>
            <p className="py-4">Press ESC key or click the button below to close</p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
    )
}