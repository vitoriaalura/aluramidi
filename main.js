alert('Essa página contém vírus');

function tocaSomPom(){document.querySelector('#som_tecla_pom').play();}

document.querySelector('.tecla_pom').onclick = tocaSomPom;
function tocaSomclap(){document.querySelector('#som_tecla_clap').play();}

document.querySelector('.tecla_clap').onclick = tocaSomclap;
function tocaSomtim(){document.querySelector('#som_tecla_clap').play();}

document.querySelector('.tecla_tim').onclick = tocaSomtim;
function tocaSomtim(){document.querySelector('#som_tecla_tim').play();}

document.querySelector('.tecla_splash').onclick = tocaSomsplash;
function tocaSomsplash(){document.querySelector('#som_tecla_splash').play();}

document.querySelector('.tecla_toim').onclick = tocaSomtoim;
function tocaSomtoim(){document.querySelector('#som_tecla_toim').play();}

document.querySelector('.tecla_psh').onclick = tocaSompsh;
function tocaSompsh(){document.querySelector('#som_tecla_psh').play();}

document.querySelector('.tecla_tic').onclick = tocaSomtic;
function tocaSomtic(){document.querySelector('#som_tecla_tic').play();}

document.querySelector('.tecla_tom').onclick = tocaSomtom;
function tocaSomtom(){document.querySelector('#som_tecla_tom').play();}

document.querySelector('.tecla_puff').onclick = tocaSompuff;
function tocaSompuff(){document.querySelector('#som_tecla_puff').play();}

document.querySelector('.tecla_pom').onclick = tocaSomPom;

const listadeTecla=document.querySelectorAll('.tecla');