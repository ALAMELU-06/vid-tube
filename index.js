<script>
function addMarksheet() {
    let name = document.getElementById('name').value || "No Name";
    let english = parseFloat(document.getElementById('english').value) || 0;
    let maths = parseFloat(document.getElementById('maths').value) || 0;
    let science = parseFloat(document.getElementById('science').value) || 0;
    let social = parseFloat(document.getElementById('social').value) || 0;
    let hindi = parseFloat(document.getElementById('hindi').value) || 0;
    let total = english + maths + science + social + hindi;
    let average = (total / 5).toFixed(2);
    let status = (average >= 33) ? "<span class='pass'>Pass</span>" : "<span class='fail'>Fail</span>";
    let table = document.getElementById('marksheet');
    let row = table.insertRow(-1);
    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = total;
    row.insertCell(2).innerHTML = average;
    row.insertCell(3).innerHTML = status;
}
</script>