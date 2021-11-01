export const AST = {
  kind: 'SourceFile',
  statements: [
    {
      kind: 'ClassDeclaration',
      name: { kind: 'Identifier', text: 'Pair' },
      members: [
        {
          kind: 'Constructor',
          children: [
            {
              kind: 'Parameter',
              type: {
                kind: 'TypeReference',
                typeName: { kind: 'Identifier', text: 'ObjectFJ' },
                children: [{ kind: 'Identifier', text: 'ObjectFJ' }],
              },
              name: { kind: 'Identifier', text: 'fst' },
              children: [
                { kind: 'Identifier', text: 'fst' },
                {
                  kind: 'TypeReference',
                  typeName: { kind: 'Identifier', text: 'ObjectFJ' },
                  children: [{ kind: 'Identifier', text: 'ObjectFJ' }],
                },
              ],
            },
            {
              kind: 'Parameter',
              type: {
                kind: 'TypeReference',
                typeName: { kind: 'Identifier', text: 'ObjectFJ' },
                children: [{ kind: 'Identifier', text: 'ObjectFJ' }],
              },
              name: { kind: 'Identifier', text: 'snd' },
              children: [
                { kind: 'Identifier', text: 'snd' },
                {
                  kind: 'TypeReference',
                  typeName: { kind: 'Identifier', text: 'ObjectFJ' },
                  children: [{ kind: 'Identifier', text: 'ObjectFJ' }],
                },
              ],
            },
          ],
        },
        {
          kind: 'MethodDeclaration',
          children: [
            { kind: 'Identifier', text: 'setFst' },
            {
              kind: 'Parameter',
              type: {
                kind: 'TypeReference',
                typeName: { kind: 'Identifier', text: 'ObjectFJ' },
                children: [{ kind: 'Identifier', text: 'ObjectFJ' }],
              },
              name: { kind: 'Identifier', text: 'newFst' },
              children: [
                { kind: 'Identifier', text: 'newFst' },
                {
                  kind: 'TypeReference',
                  typeName: { kind: 'Identifier', text: 'ObjectFJ' },
                  children: [{ kind: 'Identifier', text: 'ObjectFJ' }],
                },
              ],
            },
            {
              kind: 'TypeReference',
              typeName: { kind: 'Identifier', text: 'ObjectFJ' },
              children: [{ kind: 'Identifier', text: 'ObjectFJ' }],
            },
          ],
        },
      ],
      children: [
        { kind: 'DeclareKeyword' },
        { kind: 'Identifier', text: 'Pair' },
        {
          kind: 'HeritageClause',
          children: [
            {
              kind: 'ExpressionWithTypeArguments',
              children: [{ kind: 'Identifier', text: 'ObjectFJ' }],
            },
          ],
        },
        {
          kind: 'Constructor',
          children: [
            {
              kind: 'Parameter',
              type: {
                kind: 'TypeReference',
                typeName: { kind: 'Identifier', text: 'ObjectFJ' },
                children: [{ kind: 'Identifier', text: 'ObjectFJ' }],
              },
              name: { kind: 'Identifier', text: 'fst' },
              children: [
                { kind: 'Identifier', text: 'fst' },
                {
                  kind: 'TypeReference',
                  typeName: { kind: 'Identifier', text: 'ObjectFJ' },
                  children: [{ kind: 'Identifier', text: 'ObjectFJ' }],
                },
              ],
            },
            {
              kind: 'Parameter',
              type: {
                kind: 'TypeReference',
                typeName: { kind: 'Identifier', text: 'ObjectFJ' },
                children: [{ kind: 'Identifier', text: 'ObjectFJ' }],
              },
              name: { kind: 'Identifier', text: 'snd' },
              children: [
                { kind: 'Identifier', text: 'snd' },
                {
                  kind: 'TypeReference',
                  typeName: { kind: 'Identifier', text: 'ObjectFJ' },
                  children: [{ kind: 'Identifier', text: 'ObjectFJ' }],
                },
              ],
            },
          ],
        },
        {
          kind: 'MethodDeclaration',
          children: [
            { kind: 'Identifier', text: 'setFst' },
            {
              kind: 'Parameter',
              type: {
                kind: 'TypeReference',
                typeName: { kind: 'Identifier', text: 'ObjectFJ' },
                children: [{ kind: 'Identifier', text: 'ObjectFJ' }],
              },
              name: { kind: 'Identifier', text: 'newFst' },
              children: [
                { kind: 'Identifier', text: 'newFst' },
                {
                  kind: 'TypeReference',
                  typeName: { kind: 'Identifier', text: 'ObjectFJ' },
                  children: [{ kind: 'Identifier', text: 'ObjectFJ' }],
                },
              ],
            },
            {
              kind: 'TypeReference',
              typeName: { kind: 'Identifier', text: 'ObjectFJ' },
              children: [{ kind: 'Identifier', text: 'ObjectFJ' }],
            },
          ],
        },
      ],
    },
  ],
  children: [
    {
      kind: 'ClassDeclaration',
      name: { kind: 'Identifier', text: 'Pair' },
      members: [
        {
          kind: 'Constructor',
          parameters: [
            {
              kind: 'Parameter',
              type: {
                kind: 'TypeReference',
                typeName: { kind: 'Identifier', text: 'ObjectFJ' },
                children: [{ kind: 'Identifier', text: 'ObjectFJ' }],
              },
              name: { kind: 'Identifier', text: 'fst' },
              children: [
                { kind: 'Identifier', text: 'fst' },
                {
                  kind: 'TypeReference',
                  typeName: { kind: 'Identifier', text: 'ObjectFJ' },
                  children: [{ kind: 'Identifier', text: 'ObjectFJ' }],
                },
              ],
            },
            {
              kind: 'Parameter',
              type: {
                kind: 'TypeReference',
                typeName: { kind: 'Identifier', text: 'ObjectFJ' },
                children: [{ kind: 'Identifier', text: 'ObjectFJ' }],
              },
              name: { kind: 'Identifier', text: 'snd' },
              children: [
                { kind: 'Identifier', text: 'snd' },
                {
                  kind: 'TypeReference',
                  typeName: { kind: 'Identifier', text: 'ObjectFJ' },
                  children: [{ kind: 'Identifier', text: 'ObjectFJ' }],
                },
              ],
            },
          ],
          children: [
            {
              kind: 'Parameter',
              type: {
                kind: 'TypeReference',
                typeName: { kind: 'Identifier', text: 'ObjectFJ' },
                children: [{ kind: 'Identifier', text: 'ObjectFJ' }],
              },
              name: { kind: 'Identifier', text: 'fst' },
              children: [
                { kind: 'Identifier', text: 'fst' },
                {
                  kind: 'TypeReference',
                  typeName: { kind: 'Identifier', text: 'ObjectFJ' },
                  children: [{ kind: 'Identifier', text: 'ObjectFJ' }],
                },
              ],
            },
            {
              kind: 'Parameter',
              type: {
                kind: 'TypeReference',
                typeName: { kind: 'Identifier', text: 'ObjectFJ' },
                children: [{ kind: 'Identifier', text: 'ObjectFJ' }],
              },
              name: { kind: 'Identifier', text: 'snd' },
              children: [
                { kind: 'Identifier', text: 'snd' },
                {
                  kind: 'TypeReference',
                  typeName: { kind: 'Identifier', text: 'ObjectFJ' },
                  children: [{ kind: 'Identifier', text: 'ObjectFJ' }],
                },
              ],
            },
          ],
        },
        {
          kind: 'MethodDeclaration',
          name: { kind: 'Identifier', text: 'setFst' },
          parameters: [
            {
              kind: 'Parameter',
              type: {
                kind: 'TypeReference',
                typeName: { kind: 'Identifier', text: 'ObjectFJ' },
                children: [{ kind: 'Identifier', text: 'ObjectFJ' }],
              },
              name: { kind: 'Identifier', text: 'newFst' },
              children: [
                { kind: 'Identifier', text: 'newFst' },
                {
                  kind: 'TypeReference',
                  typeName: { kind: 'Identifier', text: 'ObjectFJ' },
                  children: [{ kind: 'Identifier', text: 'ObjectFJ' }],
                },
              ],
            },
          ],
          children: [
            { kind: 'Identifier', text: 'setFst' },
            {
              kind: 'Parameter',
              type: {
                kind: 'TypeReference',
                typeName: { kind: 'Identifier', text: 'ObjectFJ' },
                children: [{ kind: 'Identifier', text: 'ObjectFJ' }],
              },
              name: { kind: 'Identifier', text: 'newFst' },
              children: [
                { kind: 'Identifier', text: 'newFst' },
                {
                  kind: 'TypeReference',
                  typeName: { kind: 'Identifier', text: 'ObjectFJ' },
                  children: [{ kind: 'Identifier', text: 'ObjectFJ' }],
                },
              ],
            },
            {
              kind: 'TypeReference',
              typeName: { kind: 'Identifier', text: 'ObjectFJ' },
              children: [{ kind: 'Identifier', text: 'ObjectFJ' }],
            },
          ],
        },
      ],
      children: [
        { kind: 'DeclareKeyword' },
        { kind: 'Identifier', text: 'Pair' },
        {
          kind: 'HeritageClause',
          children: [
            {
              kind: 'ExpressionWithTypeArguments',
              children: [{ kind: 'Identifier', text: 'ObjectFJ' }],
            },
          ],
        },
        {
          kind: 'Constructor',
          children: [
            {
              kind: 'Parameter',
              type: {
                kind: 'TypeReference',
                typeName: { kind: 'Identifier', text: 'ObjectFJ' },
                children: [{ kind: 'Identifier', text: 'ObjectFJ' }],
              },
              name: { kind: 'Identifier', text: 'fst' },
              children: [
                { kind: 'Identifier', text: 'fst' },
                {
                  kind: 'TypeReference',
                  typeName: { kind: 'Identifier', text: 'ObjectFJ' },
                  children: [{ kind: 'Identifier', text: 'ObjectFJ' }],
                },
              ],
            },
            {
              kind: 'Parameter',
              type: {
                kind: 'TypeReference',
                typeName: { kind: 'Identifier', text: 'ObjectFJ' },
                children: [{ kind: 'Identifier', text: 'ObjectFJ' }],
              },
              name: { kind: 'Identifier', text: 'snd' },
              children: [
                { kind: 'Identifier', text: 'snd' },
                {
                  kind: 'TypeReference',
                  typeName: { kind: 'Identifier', text: 'ObjectFJ' },
                  children: [{ kind: 'Identifier', text: 'ObjectFJ' }],
                },
              ],
            },
          ],
        },
        {
          kind: 'MethodDeclaration',
          children: [
            { kind: 'Identifier', text: 'setFst' },
            {
              kind: 'Parameter',
              type: {
                kind: 'TypeReference',
                typeName: { kind: 'Identifier', text: 'ObjectFJ' },
                children: [{ kind: 'Identifier', text: 'ObjectFJ' }],
              },
              name: { kind: 'Identifier', text: 'newFst' },
              children: [
                { kind: 'Identifier', text: 'newFst' },
                {
                  kind: 'TypeReference',
                  typeName: { kind: 'Identifier', text: 'ObjectFJ' },
                  children: [{ kind: 'Identifier', text: 'ObjectFJ' }],
                },
              ],
            },
            {
              kind: 'TypeReference',
              typeName: { kind: 'Identifier', text: 'ObjectFJ' },
              children: [{ kind: 'Identifier', text: 'ObjectFJ' }],
            },
          ],
        },
      ],
    },
  ],
};
