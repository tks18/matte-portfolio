import { gsap } from 'gsap';
import observeNexecute from './observer';
import { lettersArray, safeEmojis } from '@t/emoji-array';

let update = (options) => {
  var html = '';
  let wordsarray = options.emoji ? safeEmojis : lettersArray;
  options.map.startArray.forEach((map) => {
    html += wordsarray[Math.round(map) % wordsarray.length];
  });
  options.vm.$set(options.vm[options.arrayName], options.arrayProperty, html);
};

export function tweenToRevObserver(options) {
  observeNexecute(options.elem, () => {
    var tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      repeatDelay: 2,
      onUpdate: () => {
        update(options);
      },
    });
    let wordsarray = options.emoji ? safeEmojis : lettersArray;
    options.map.finalArray.forEach((range, index) => {
      tl.to(
        options.map.startArray,
        {
          [index]: wordsarray.length * 2 + range,
          ease: 'power4',
          duration: index / 4 + 1,
        },
        0,
      );
    });
  });
}

export default (options) => {
  var tl = gsap.timeline({
    repeat: -1,
    yoyo: true,
    repeatDelay: 2,
    onUpdate: () => {
      update(options);
    },
  });
  let wordsarray = options.emoji ? safeEmojis : lettersArray;
  options.map.finalArray.forEach((range, index) => {
    tl.to(
      options.map.startArray,
      {
        [index]: wordsarray.length * 2 + range,
        ease: 'power4',
        duration: index / 4 + 1,
      },
      0,
    );
  });
};
