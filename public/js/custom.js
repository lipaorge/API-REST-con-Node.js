// botones editar y eliminar
const modal = new bootstrap.Modal(document.getElementById('modalEditar'));

const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if (e.target.closest(selector)) {
            handler(e);
        }
    });
}

on(document, 'click', '.btn-editar', e => {
    const fila = e.target.parentNode.parentNode;
    const formEditar = document.getElementById('formEditar');
    formEditar.idUsuario.value = fila.children[0].innerHTML;
    formEditar.nombre.value = fila.children[1].innerHTML;    
    formEditar.email.value = fila.children[2].innerHTML;
    formEditar.estado.value = fila.children[3].innerHTML;
    console.log(e.target.parentNode.parentNode);    
    modal.show();
});