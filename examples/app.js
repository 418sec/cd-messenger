let data = [
  {fname: 'Mike', lname: 'Erickson'},
  {fname: 'Kira', lname: 'Erickson'},
  {fname: 'Joelle', lname: 'Asoau'},
  {fname: 'Brady', lname: 'Erickson'},
  {fname: 'Bailey', lname: 'Erickson'},
  {fname: 'Trevor', lname: 'Erickson'},
];

// messenger.log('test logger',[{fname: 'MIke'}]);
//

let vers = messenger.version();
console.log('Version: ' + vers);

messenger.info('info');
messenger.note('note');
messenger.success('success');
messenger.warning('warning');
messenger.error('error');
// messenger.table([{fname: 'Mike'}]);
// messenger.table(data);
//
// messenger.chalkline('*');


// console.log('%c a colorful message', 'background: red; color: white; display: block;', data);
// console.log('%c a colorful message', 'background: green; color: white; display: block;');
// console.log('%c a colorful message', 'background: yellow; color: black; display: block;');
// console.log('%c a colorful message', 'background: orange; color: black; display: block;');
// console.log('%c a colorful message', 'background: blue; color: white; display: block;');