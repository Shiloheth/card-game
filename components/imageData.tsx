export  function imageData(): any {

   const images = ['/bury_them_deep_by_alexanderexorcist_dblo674.jpg','/farfadet_by_alexanderexorcist_dcu41pd.jpg','/witch_apprentice__gwent_card_by_alexanderexorcist_denqdiu.jpg','/desecrated_source_of_magic_by_alexanderexorcist_d2kk4tb.jpg','/forgotten_dreamland_by_alexanderexorcist_d2ex737.jpg','/haldan_by_alexanderexorcist_dchkl5r.jpg','/bury_them_deep_by_alexanderexorcist_dblo674.jpg','/farfadet_by_alexanderexorcist_dcu41pd.jpg','/witch_apprentice__gwent_card_by_alexanderexorcist_denqdiu.jpg','/desecrated_source_of_magic_by_alexanderexorcist_d2kk4tb.jpg','/forgotten_dreamland_by_alexanderexorcist_d2ex737.jpg','/haldan_by_alexanderexorcist_dchkl5r.jpg']
   

   const imageObjects = images.map((image, idx) => ({
      id: idx,
      revealed: false,
      image: image,
      matched:false
    }));

   return imageObjects

}