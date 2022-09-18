function Proses(event){
    const nm = document.getElementById('nama')
    const rl = document.getElementById('role')
    const vl = document.getElementById('avail')
    const ag = document.getElementById('age')
    const lk = document.getElementById('lokasi')
    const yr = document.getElementById('years')
    const ml = document.getElementById('email')
   
    document.getElementById('data-nama').innerText = nm.value
    document.getElementById('data-role').innerText = rl.value
    document.getElementById('data-avail').innerText = vl.value
    document.getElementById('data-age').innerText = ag.value
    document.getElementById('data-lokasi').innerText = lk.value
    document.getElementById('data-years').innerText = yr.value
    document.getElementById('data-email').innerText = ml.value

    event.prefentDefault()
}