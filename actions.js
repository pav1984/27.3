import uuid from uuid;

export const ADD_COMMENT = 'ADD_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT'

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4(),
        thumbs_up: 0,
        thumbs_down: 0
    }
};
 function editComment(text,id) {
     return {
         type: EDIT_COMMENT,
         id,
         text
     }
 };

 function removeComment(id) {
     return {
         type: REMOVE_COMMENT,
         id
     }
 };

function thumbDownComment (id) {
    return {
        type: THUMB_DOWN_COMMENT,
        id,
        thumbs_down: thumbs_down - 1
    }
};

function thumbUpComment (id) {
    return {
        type: THUMB_UP_COMMENT,
        id,
        thumbs_up: thumbs_up + 1
    }
}

const boundAddComment = text => dispatch(addComment(text));
const boundEditComment = (text,id) => dispatch((editComment(text,id)));
const boundRemoveComment = id => dispatch(removeComment(id));
const boundThumbDownComment = id => dispatch(thumbDownComment(id));
const boundThumbUpComment = id => dispatch(thumbUpComment(id));