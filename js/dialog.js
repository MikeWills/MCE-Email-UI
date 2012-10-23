tinyMCEPopup.requireLangPack();

var EmailDialog = {
	init : function() {
		var f = document.forms[0];

		// Get the selected contents as text and place it in the input
		f.selectedText.value = tinyMCEPopup.editor.selection.getContent({format : 'text'});
	},

	insert : function() {
		// Insert the contents from the input into the document
		var insertText = '<a href="mailto:' + document.forms[0].email.value;
		if (document.forms[0].subject.value !== ''){
			insertText += '?subject=' + document.forms[0].subject.value;
		}
		insertText += '">' + document.forms[0].selectedText.value + '</a>';
		tinyMCEPopup.editor.execCommand('mceInsertContent', false, insertText);
		tinyMCEPopup.close();
	}
};

tinyMCEPopup.onInit.add(EmailDialog.init, EmailDialog);
