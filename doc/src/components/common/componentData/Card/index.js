export const componentData = {
  htmlStructure: `
    <div class="card elevation-low">
      <div aria-label="card-header" class="cardHeader">
        <span>Card String header</span>
      </div>
      <div aria-label="card-content">
        Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown
        printer took a galley of type and scrambled it to make a type
        specimen book.
      </div>
      <div class="cardFooter">
        <div class="more-icon" />
      </div>
      <div>
        <!-- Content rendered on Card expansion -->
        It has survived not only five centuries, but also the leap
        into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset
        sheets containing Lorem Ipsum passages, and more recently with
        desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </div>
    </div>
  `,
  propsData: [
    {
      prop: 'children',
      type: 'Any',
      defaultValue: '',
      description: 'All children components to be rendered inside a cardview. ( Required )',
    },
    {
      prop: 'className',
      type: 'String',
      defaultValue: '',
      description: 'Additional class(es) for custom styling. These classes will be added along with library specific styles',
    },
    {
      prop: 'wrapContent',
      type: 'Boolean',
      defaultValue: 'false',
      description: 'If true sets the width of the parent card to width of its content else sets width to maximum available width inside its parent',
    },
    {
      prop: 'elevation',
      type: 'String',
      defaultValue: 'low',
      description: 'This set elevation/depth of shadow of the card. The possible values are low, medium, high',
    },
    {
      prop: 'noPadding',
      type: 'Boolean',
      defaultValue: 'false',
      description: 'If true card container will not give padding by default',
    },
    {
      prop: 'header',
      type: 'String / Component',
      defaultValue: '',
      description: 'If a string is supplied, it will set as title of card with library specific styling. If a React component is supplied that component will be renderd as a header',
    },
  ],  
  themesData: [
    {
      name: 'card',
      description: 'Class used for the root element.',
    },
    {
      name: 'cardHeader',
      description: 'Class used for header component if card renders header by itself',
    },
  ],
  basicComponent: `
    <Card
      header='Card String header'
      wrapContent
      expandedContent={
        () => <div>
          It has survived not only five centuries, but also the 
          leap into electronic typesetting, remaining essentially 
          unchanged. It was popularised in the 1960s with the 
          release of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </div>
      }>
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took a galley of
      type and scrambled it to make a type specimen book.
    </Card>
  `,
  componentUsage: `
    //  Component.js
    
    class Demo extends React.Component {
      render() {
        return (
          <div>
            <PreviewBlock header="default card">

            {/* Default Card with expandable content */}
              <Card
                header='Card String header'
                wrapContent
                expandedContent={
                  () => <div>
                    It has survived not only five centuries, but also the 
                    leap into electronic typesetting, remaining essentially 
                    unchanged. It was popularised in the 1960s with the 
                    release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus
                    PageMaker including versions of Lorem Ipsum.
                  </div>
                }>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of
                  type and scrambled it to make a type specimen book.
              </Card>

            </PreviewBlock>
            <PreviewBlock header="Customized cards">
              <PreviewElements>
                <div>

                {/* Customized Card with image as content, Refer theme.scss */}
                  <Card
                    theme={componentTheme}
                    header="Am I Cute?"
                    footer={
                      <Button href="https://github.com/Codebrahma/react-lite-ui" type="primary" bordered>view more</Button>
                    }
                    elevation="medium"
                  >
                    <div className="col card-content">
                      <img src="https://placeimg.com/300/300/animals" alt="animals" />
                    </div>
                  </Card>

                </div>
                <div>

                {/* Customised Card for picture album, Refer theme.scss */}
                  <Card
                    theme={componentTheme}
                    noPadding
                    footer={
                      <Button href="https://github.com/Codebrahma/react-lite-ui" type="success" borderless>view more</Button>
                    }
                    elevation="medium"
                  >
                    <div>
                      <img src="https://placeimg.com/300/300/nature" alt="nature" />
                    </div>
                  </Card>

                </div>
              </PreviewElements>
            </PreviewBlock>
          </div>
        )
      }
    }
  `,
  componentUsageTheme: `
    //  theme.scss

    :local(.card) {
      z-index: 2;
      height: fit-content;
      width: 100%;
      transition: margin 0.2s ease-in-out;
    }
    
    :local(.cardHeader) {
      color: #0c549c;
      text-align: center;
    }
    
    :local(.cardFooter) {
      justify-content: center;
      align-self: baseline;
    }
  `,
};