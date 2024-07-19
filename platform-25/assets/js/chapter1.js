document.getElementById('search-bar').addEventListener('keyup', function() {
    var input = document.getElementById('search-bar');
    var filter = input.value.toLowerCase();
    var subjects = document.getElementsByClassName('subject');

    for (var i = 0; i < subjects.length; i++) {
        var subject = subjects[i];
        var subjectName = subject.getAttribute('data-subject');

        if (subjectName.toLowerCase().indexOf(filter) > -1) {
            subject.style.display = '';
        } else {
            subject.style.display = 'none';
        }
    }
});