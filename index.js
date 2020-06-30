//const
const mensaje= document.getElementById('error')
const results = document.getElementById('viewTask')
const label = document.getElementById('label')
const details = document.getElementById('details')
const form = document.getElementById('form')


//listener
const btn = document.getElementById('btn')

//create task 
function createTask(label, details, field){
    const element = document.createElement('div')
    const template = `
    <div class="card mb-4">
        <div class="card-body p-4 text-center">
            <h2>Task: </h2>
            <h5 id="title" class="card-title my-1">${label.value}</h5>
            <h2>Details: </h2>
            <p id="detail" class="card-text my-1">${details.value}</p>
            <a id="delete" href="#" name="delete" class="btn btn-danger p-3 m-2">Delete</a>
            <a id="update" href="#" name="update" class="btn btn-warning text-white p-3 m-2">Update</a>
            <a id="save" href="#" name="save" class="btn btn-secondary bg-secondary text-white p-3 m-2" style="display: none">Save</a>
        </div>
    </div>    
    `
    element.innerHTML = template;
    field.appendChild(element);
}
//create message
function message(){
    const errorDiv = document.createElement('div')
    errorDiv.classList.add('bg-danger', 'text-white', 'p-3', 'mb-2', 'text-center')
    const template = `
        <p><h4>por favor coloca tu informacion en todos los campos</h4></p>
    `
    errorDiv.innerHTML = template
    mensaje.appendChild(errorDiv)
}
//delete task 
function deleteElement(e){
   e.remove()
}
// show error message
function errorMessage(){
    message()
    setTimeout(()=>{
        mensaje.children[0].remove()
    },3000)

}
//eject listeners
btn.addEventListener('click', e =>{
    e.preventDefault()
    if(label.value === '' || details.value === ''){
        errorMessage()
    }else {
        createTask(label, details, results)
    form.reset()
    }
})
results.addEventListener('click', e => {
    const bdelete = document.querySelector('#delete')
    const bupdate = document.querySelector('#update')
    const bsave = document.querySelector('#save')
    const detail = document.querySelector('#detail')
    const title = document.querySelector('#title')


    if (e.target.name === 'delete'){
        const element = e.target.parentElement.parentElement.parentElement
        deleteElement(element)
    }else if(e.target.name === 'update'){
        bsave.removeAttribute('style')
        bdelete.setAttribute('style','display: none')
        bupdate.setAttribute('style','display: none')
        title.className='bg-success'
        title.setAttribute('contentEditable', 'true')
        detail.className='bg-success'
        detail.setAttribute('contentEditable', 'true')
    }else if(e.target.name === 'save'){
        bsave.setAttribute('style', 'display: none')
        bdelete.removeAttribute('style')
        bupdate.removeAttribute('style')
        title.classList.remove('bg-success')
        title.removeAttribute('contentEditable')
        detail.classList.remove('bg-success')
        detail.removeAttribute('contentEditable')
    }
})

