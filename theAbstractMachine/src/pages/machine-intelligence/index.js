import React from 'react'
import Layout from "../../components/layout"
import ReamCanvas from "../../components/ream/reamcanvas"
import PaperNode, {Snippet} from "../../components/ream/papernode"

const Intelligence = () => {
    return (
        <Layout>
            <ReamCanvas arrows={[{from:"1.2", to:"2.2"}, {from: "1.1", to: "2.1"}]}>
                <PaperNode id="node2"> 
                    <Snippet open={true}>
                        Hello this is <mark id="1.1">Snippet 1.1</mark>
                    </Snippet>
                    <Snippet open={true}>
                        Hello this is <mark id="1.2">Snippet 1.2</mark>
                    </Snippet>
                    <Snippet>
                        Hello this is Snippet 1.3
                    </Snippet>
                </PaperNode>
                <PaperNode id="node2">
                    <Snippet open={true}>
                        Hello this is <mark id="2.1">Snippet 2.1</mark>
                    </Snippet>
                    <Snippet open={true}>
                        Hello this is <mark id="2.2">Snippet 2.2</mark>
                    </Snippet>
                    <Snippet>
                        Hello this is Snippet 2.3
                    </Snippet>
                </PaperNode>
            </ReamCanvas>
        </Layout>
    )
}

export default Intelligence
