import { ObjectFJ } from '.';

export = Pair;

declare class Pair extends ObjectFJ {
  constructor(fst: ObjectFJ, snd: ObjectFJ);
  setFst(newFst: ObjectFJ): Pair;
}

declare namespace Pair {
  export class ObjectFJ {
    constructor();
  }
}
