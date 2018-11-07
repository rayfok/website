import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import ASSETS2018_SpeechAccess from '../pdfs/ASSETS2018_SpeechAccess.pdf'
import CI2017_TowardsHybridIntelligenceForRobotics_POSTER from '../pdfs/CI2017_TowardsHybridIntelligenceForRobotics_POSTER.pdf'
import CI2017_TowardsHybridIntelligenceForRobotics from '../pdfs/CI2017_TowardsHybridIntelligenceForRobotics.pdf'
import GroupSight2017_FourEyes from '../pdfs/GroupSight2017_FourEyes.pdf'
import IUI2018_FourEyes from '../pdfs/IUI2018_FourEyes.pdf'
import TiiS2018_FourEyes from '../pdfs/TiiS2018_FourEyes.pdf'
import UIST2017_WearMail from '../pdfs/UIST2017_WearMail.pdf'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="research"
          className={`${this.props.article === 'research' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Research</h2>
          <p>
            I'm a senior at the University of Michigan studying computer science
            and math, and a member of the Crowds and Machines Lab, advised by{' '}
            <a
              href="https://web.eecs.umich.edu/~wlasecki/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dr. Walter S. Lasecki
            </a>
            . My research interests lie in the intersection of human-computer
            interaction and artificial intelligence, focusing on the design and
            development of hybrid intelligent systems for a diverse range of
            applications.
          </p>

          <p>
            I'm currently working on several research projects, from exploring
            how we can use crowdsourced feedback to improve training of
            reinforcement learning agents in OpenAI Gym, to integrating human
            intelligence in the form of semantic understanding for realtime,
            adaptive time-series modeling. Stay tuned for these exciting papers
            in the coming months.
          </p>

          <h3>Publications</h3>

          <div className="publication">
            <b>R. Fok</b>, H. Kaur, S. Palani, M.E. Mott, W.S. Lasecki.{' '}
            <a
              href={ASSETS2018_SpeechAccess}
              target="_blank"
              rel="noopener noreferrer"
            >
              Towards More Robust Speech Interactions for Deaf and Hard of
              Hearing Users
            </a>
            . In{' '}
            <i>
              Proceedings of the International ACM SIGACCESS Conference on
              Computers and Accessibility (ASSETS 2018)
            </i>
            . Galway, Ireland.
          </div>

          <div className="publication">
            J.Y. Song, <b>R. Fok</b>, J. Kim, W.S. Lasecki.{' '}
            <a
              href={TiiS2018_FourEyes}
              target="_blank"
              rel="noopener noreferrer"
            >
              FourEyes: Leveraging Tool Diversity as a Means to Improve
              Aggregate Accuracy in Crowdsourcing.
            </a>{' '}
            In <i>ACM Transactions on Interactive Intelligent Systems (TiiS)</i>
            . 2018.
          </div>

          <div className="publication">
            J.Y. Song, <b>R. Fok</b>, A. Lundgard, F. Yang, J. Kim, W.S.
            Lasecki.{' '}
            <a
              href={IUI2018_FourEyes}
              target="_blank"
              rel="noopener noreferrer"
            >
              Two Tools are Better Than One: Tool Diversity as a Means of
              Improving Aggregate Crowd Performance
            </a>
            . In{' '}
            <i>
              Proceedings of the ACM International Conference on Intelligent
              User Interfaces (IUI 2018)
            </i>
            . Tokyo, Japan.{' '}
            <span className="paperAward">
              Best Student Paper Honorable Mention
            </span>
          </div>

          <div className="publication">
            S. Swaminathan, <b>R. Fok</b>, F. Chen, T.K. Huang, I. Lin, R.
            Jadvani, W.S. Lasecki, J.P. Bigham.{' '}
            <a
              href={UIST2017_WearMail}
              target="_blank"
              rel="noopener noreferrer"
            >
              WearMail: On-the-Go Access to Information in Your Email with a
              Privacy-Preserving Human Computation Workflow
            </a>
            . In{' '}
            <i>
              Proceedings of the ACM Symposium on User Interface Software and
              Technology (UIST 2017)
            </i>
            . Quebec City, Canada.
          </div>

          <div className="publication">
            J.Y. Song, <b>R. Fok</b>, F. Yang, K. Wang, A.R. Lundgard, W.S.
            Lasecki.{' '}
            <a
              href={GroupSight2017_FourEyes}
              target="_blank"
              rel="noopener noreferrer"
            >
              Tool Diversity as a Means of Improving Aggregate Crowd Performance
              on Image Segmentation Tasks
            </a>
            . In{' '}
            <i>
              HCOMP Workshop on Human Computation for Image and Video Analysis
              (GroupSight 2017)
            </i>
            . Quebec City, Quebec. 2017.
          </div>

          <div className="publication">
            S.R. Gouravajhala, J.Y. Song, J. Yim, <b>R. Fok</b>, Y. Huang, F.
            Yang, K. Wang, Y. An, W.S. Lasecki.{' '}
            <a
              href={CI2017_TowardsHybridIntelligenceForRobotics}
              target="_blank"
              rel="noopener noreferrer"
            >
              Towards Hybrid Intelligence for Robotics
            </a>
            . In <i>Collective Intelligence Conference (CI 2017)</i>. New York,
            NY. [
            <a
              href={CI2017_TowardsHybridIntelligenceForRobotics_POSTER}
              target="_blank"
              rel="noopener noreferrer"
            >
              POSTER
            </a>
            ]
          </div>
          {close}
        </article>

        <article
          id="blog"
          className={`${this.props.article === 'blog' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Blog</h2>
          <Link to='/blog0/'>Reflecting on My First Academic Conference</Link>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
  onOpenArticle: PropTypes.func,
}

export default Main
