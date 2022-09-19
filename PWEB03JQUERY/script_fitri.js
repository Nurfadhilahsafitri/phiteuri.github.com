         $(document).ready(function(){
    $('.nama_mhs').click(function(){
      let isi = $(this).text(); 
      alert("Kamu baru saja mengklik cell yang berisi");
      let isi2 = prompt('Ubah dengan:', isi);
      if(!isi2) return;
      alert('Berhasil diubah');

      $(this).text(isi2);
  });
    $('.alamat').click(function(){
      let isi = $(this).text(); 
      alert("Kamu baru saja mengklik cell yang berisi");
      let isi2 = prompt('Ubah dengan:', isi);
      if(!isi2) return;
      alert('Berhasil diubah');

      $(this).text(isi2);
  });

   $('.apus').click(function(){
    let yakin = confirm('Yakin mau menghapus?');
    if(!yakin) return;

   let id = $(this).prop('id');

   let rid = id.split('__');

   let baris_ke = rid[1];
   $('#row__'+baris_ke).slideUp()
  
  });
   });


