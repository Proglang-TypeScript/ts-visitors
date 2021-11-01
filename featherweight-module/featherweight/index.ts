export class ObjectFJ {}

export default class Pair extends ObjectFJ {
  fst: ObjectFJ;
  snd: ObjectFJ;

  constructor(fst: ObjectFJ, snd: ObjectFJ) {
    super();
    this.fst = fst;
    this.snd = snd;
  }

  setFst(newFst: ObjectFJ): Pair {
    return new Pair(newFst, this.snd);
  }
}
