import uuid from uuid;

function addComment(text) {
    return {
        type: 'ADD_COMMENT',
        text,
        id: uuid.v4()
    }
};
 function editComment(text,id) {
     return {
         type: 'EDIT_COMMENT',
         id,
         text
     }
 };

 function removeComment(id) {
     return {
         type: 'REMOVE_COMMENT',
         id
     }
 };

function thumbDownComment (id) {
    return {
        type: 'THUMB_DOWN_COMMENT',
        id,
        vote: vote - 1
    }
};

function thumbUpComment (id) {
    return {
        type: 'THUMB_UP_COMMENT',
        id,
        vote: vote + 1
    }
}

const boundAddComment = text => dispatch(addComment(text));
const boundEditComment = (text,id) => dispatch((editComment(text,id)));
const boundRemoveComment = id => dispatch(removeComment(id));
const boundThumbDownComment = id => dispatch(thumbDownComment(id));
const boundThumbUpComment = id => dispatch(thumbUpComment(id));