document.addEventListener("DOMContentLoaded", () => {
  const noteList = document.getElementById('note-list')

  fetch('http://localhost:3000/api/v1/notes')
    .then(res => res.json())
    .then(json => {
      json.forEach(note => {
        let noteDiv = document.createElement('div')
        noteDiv.innerHTML = `
          <h3> ${note.title} </h3>
          <p> ${note.body} </p>
        `
        noteDiv.className = 'note-card'
        // noteDiv.addEventListener('click', function(event){showNotePreview(note)})
        noteList.appendChild(noteDiv)
      })
    })
})
