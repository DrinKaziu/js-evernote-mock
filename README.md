Backend Changes/Tips
 * Make change to notes private params - should be able to accept a user_id param
 * Run your migrations (tables already created)
 * Seed your backend (data exists in seed file)

FrontEnd
* A user should be able to display all their notes- a note should render like
"<div class='note-card'>
<button> x </button>
<h3> Title </h3>
<p> Body </p>
</div>"
* A user can create a note which appears on the note list and persists when a page reloads
* A user should be able to delete a note from the page and that note should no longer reappear when the page reloads

Routes
* "GET" already existing user notes
  http://localhost:3000/api/v1/notes
* "POST" a new note for a user
  http://localhost:3000/api/v1/notes
  the headers expected are
  {
    Accept: 'applicaton/json',
    'Content-Type': 'application/json'
  }
  the body of the request expects
  {body: 'note body',
  title: 'note title',
  user_id: 1} <-- Important: User id will always be 1

* "Delete" a note
Example: to delete a note who's ID is 1 use this endpoint for your fetch with a method of "DELETE" http://localhost:3000/api/v1/notes/1
