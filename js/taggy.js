ds_name = "Untitled Dataset";

$(document).ready(function() {
	// Initialize Parameters
	$('#ds_namelabel').text(ds_name);
});

/* Dataset Name Functions */
$("#ds_namelabel").click(function() {
	$("#ds_label").toggle();
	$("#ds_editlabel").toggle();
	$("#dataset_name").val(ds_name);
});

$("#dsname_savebtn").click(function() {
	if ($("#dataset_name").val() != "") {
		ds_name = $("#dataset_name").val();
		$('#ds_namelabel').text(ds_name);
	}
	$("#ds_label").toggle();
	$("#ds_editlabel").toggle();
});

/* Sub-Navigation Toggle */
$('#subnav a').click(function (e) {
  	e.preventDefault();
	$(this).tab('show');
	$('.sb').hide();
	$('#'+this.href.split('#')[1]).toggle();
})

/* Data List Image Upload Client */
$('form input').change(function () {
	if (this.files.length > 0) $('.dl_upload').hide();
	$(".uploadStatus").toggle();
	$(".uploadStatus").text(this.files.length + " file(s) ready to annotate!");

	console.log(this.files[0]);
});
