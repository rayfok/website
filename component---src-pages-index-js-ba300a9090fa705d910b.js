;(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    139: function(e, t, a) {
      'use strict'
      a.r(t)
      a(160)
      var n = a(7),
        r = a.n(n),
        l = a(48),
        i = a.n(l),
        o = a(0),
        c = a.n(o),
        s = a(141),
        m = a(4),
        u = a.n(m),
        p = a(162),
        d = a.n(p),
        f = function(e) {
          return c.a.createElement(
            'header',
            { id: 'header', style: e.timeout ? { display: 'none' } : {} },
            c.a.createElement(
              'div',
              { className: 'logo' },
              c.a.createElement('span', { className: 'icon fa-empire' })
            ),
            c.a.createElement(
              'div',
              { className: 'content' },
              c.a.createElement(
                'div',
                { className: 'inner' },
                c.a.createElement('h1', null, 'Raymond Fok'),
                c.a.createElement(
                  'p',
                  null,
                  'Hi. Researcher, coder, and foodie. Nice to meet you.'
                )
              )
            ),
            c.a.createElement(
              'nav',
              null,
              c.a.createElement(
                'ul',
                null,
                c.a.createElement(
                  'li',
                  null,
                  c.a.createElement(
                    'a',
                    {
                      href: 'javascript:;',
                      onClick: function() {
                        e.onOpenArticle('research')
                      },
                    },
                    'Research'
                  )
                ),
                c.a.createElement(
                  'li',
                  null,
                  c.a.createElement(
                    'a',
                    {
                      href: 'javascript:;',
                      onClick: function() {
                        e.onOpenArticle('blog')
                      },
                    },
                    'Blog'
                  )
                ),
                c.a.createElement(
                  'li',
                  null,
                  c.a.createElement('a', { href: d.a, target: '_blank' }, 'CV')
                )
              )
            ),
            c.a.createElement(
              'ul',
              { className: 'icons' },
              c.a.createElement(
                'li',
                null,
                c.a.createElement(
                  'a',
                  {
                    href: 'https://twitter.com/',
                    className: 'icon fa-twitter',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  },
                  c.a.createElement('span', { className: 'label' }, 'Twitter')
                )
              ),
              c.a.createElement(
                'li',
                null,
                c.a.createElement(
                  'a',
                  {
                    href: 'https://www.facebook.com/raymond.fok.75',
                    className: 'icon fa-facebook',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  },
                  c.a.createElement('span', { className: 'label' }, 'Facebook')
                )
              ),
              c.a.createElement(
                'li',
                null,
                c.a.createElement(
                  'a',
                  {
                    href: 'https://github.com/rayfok',
                    className: 'icon fa-github',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  },
                  c.a.createElement('span', { className: 'label' }, 'GitHub')
                )
              ),
              c.a.createElement(
                'li',
                null,
                c.a.createElement(
                  'a',
                  {
                    href: 'https://www.linkedin.com/in/raymond-fok/',
                    className: 'icon fa-linkedin',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  },
                  c.a.createElement('span', { className: 'label' }, 'LinkedIn')
                )
              ),
              c.a.createElement(
                'li',
                null,
                c.a.createElement(
                  'a',
                  {
                    href:
                      'https://scholar.google.com/citations?user=j238omAAAAAJ',
                    className: 'icon fa-google',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  },
                  c.a.createElement(
                    'span',
                    { className: 'label' },
                    'Google Scholar'
                  )
                )
              )
            ),
            c.a.createElement('span', { id: 'email' }, 'rayfok@umich.edu')
          )
        }
      f.propTypes = { onOpenArticle: u.a.func, timeout: u.a.bool }
      var h = f,
        E = a(163),
        g = a.n(E),
        b = a(164),
        k = a.n(b),
        y = a(165),
        v = a.n(y),
        w = a(166),
        A = a.n(w),
        S = a(167),
        C = a.n(S),
        T = a(168),
        I = a.n(T),
        N = a(169),
        R = a.n(N),
        F = (function(e) {
          function t() {
            return e.apply(this, arguments) || this
          }
          return (
            r()(t, e),
            (t.prototype.render = function() {
              var e = this,
                t = c.a.createElement('div', {
                  className: 'close',
                  onClick: function() {
                    e.props.onCloseArticle()
                  },
                })
              return c.a.createElement(
                'div',
                {
                  ref: this.props.setWrapperRef,
                  id: 'main',
                  style: this.props.timeout
                    ? { display: 'flex' }
                    : { display: 'none' },
                },
                c.a.createElement(
                  'article',
                  {
                    id: 'research',
                    className:
                      ('research' === this.props.article ? 'active' : '') +
                      ' ' +
                      (this.props.articleTimeout ? 'timeout' : ''),
                    style: { display: 'none' },
                  },
                  c.a.createElement('h2', { className: 'major' }, 'Research'),
                  c.a.createElement(
                    'p',
                    null,
                    "I'm a senior at the University of Michigan studying computer science and math, and a member of the Crowds and Machines Lab, advised by ",
                    c.a.createElement(
                      'a',
                      {
                        href: 'https://web.eecs.umich.edu/~wlasecki/',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                      },
                      'Dr. Walter S. Lasecki'
                    ),
                    '. My research interests lie in the intersection of human-computer interaction and artificial intelligence, focusing on the design and development of hybrid intelligent systems for a diverse range of applications.'
                  ),
                  c.a.createElement(
                    'p',
                    null,
                    "I'm currently working on several research projects, from exploring how we can use crowdsourced feedback to improve training of reinforcement learning agents in OpenAI Gym, to integrating human intelligence in the form of semantic understanding for realtime, adaptive time-series modeling. Stay tuned for these exciting papers in the coming months."
                  ),
                  c.a.createElement('h3', null, 'Publications'),
                  c.a.createElement(
                    'div',
                    { class: 'publication' },
                    c.a.createElement('b', null, 'R. Fok'),
                    ', H. Kaur, S. Palani, M.E. Mott, W.S. Lasecki. ',
                    c.a.createElement(
                      'a',
                      {
                        href: g.a,
                        target: '_blank',
                        rel: 'noopener noreferrer',
                      },
                      'Towards More Robust Speech Interactions for Deaf and Hard of Hearing Users'
                    ),
                    '. In ',
                    c.a.createElement(
                      'i',
                      null,
                      'Proceedings of the International ACM SIGACCESS Conference on Computers and Accessibility (ASSETS 2018)'
                    ),
                    '. Galway, Ireland.'
                  ),
                  c.a.createElement(
                    'div',
                    { class: 'publication' },
                    'J.Y. Song, ',
                    c.a.createElement('b', null, 'R. Fok'),
                    ', J. Kim, W.S. Lasecki. ',
                    c.a.createElement(
                      'a',
                      {
                        href: I.a,
                        target: '_blank',
                        rel: 'noopener noreferrer',
                      },
                      'FourEyes: Leveraging Tool Diversity as a Means to Improve Aggregate Accuracy in Crowdsourcing.'
                    ),
                    ' In ',
                    c.a.createElement(
                      'i',
                      null,
                      'ACM Transactions on Interactive Intelligent Systems (TiiS)'
                    ),
                    '. 2018.'
                  ),
                  c.a.createElement(
                    'div',
                    { class: 'publication' },
                    'J.Y. Song, ',
                    c.a.createElement('b', null, 'R. Fok'),
                    ', A. Lundgard, F. Yang, J. Kim, W.S. Lasecki. ',
                    c.a.createElement(
                      'a',
                      {
                        href: C.a,
                        target: '_blank',
                        rel: 'noopener noreferrer',
                      },
                      'Two Tools are Better Than One: Tool Diversity as a Means of Improving Aggregate Crowd Performance'
                    ),
                    '. In ',
                    c.a.createElement(
                      'i',
                      null,
                      'Proceedings of the ACM International Conference on Intelligent User Interfaces (IUI 2018)'
                    ),
                    '. Tokyo, Japan. ',
                    c.a.createElement(
                      'span',
                      { class: 'paperAward' },
                      'Best Student Paper Honorable Mention'
                    )
                  ),
                  c.a.createElement(
                    'div',
                    { class: 'publication' },
                    'S. Swaminathan, ',
                    c.a.createElement('b', null, 'R. Fok'),
                    ', F. Chen, T.K. Huang, I. Lin, R. Jadvani, W.S. Lasecki, J.P. Bigham. ',
                    c.a.createElement(
                      'a',
                      {
                        href: R.a,
                        target: '_blank',
                        rel: 'noopener noreferrer',
                      },
                      'WearMail: On-the-Go Access to Information in Your Email with a Privacy-Preserving Human Computation Workflow'
                    ),
                    '. In ',
                    c.a.createElement(
                      'i',
                      null,
                      'Proceedings of the ACM Symposium on User Interface Software and Technology (UIST 2017)'
                    ),
                    '. Quebec City, Canada.'
                  ),
                  c.a.createElement(
                    'div',
                    { class: 'publication' },
                    'J.Y. Song, ',
                    c.a.createElement('b', null, 'R. Fok'),
                    ', F. Yang, K. Wang, A.R. Lundgard, W.S. Lasecki. ',
                    c.a.createElement(
                      'a',
                      {
                        href: A.a,
                        target: '_blank',
                        rel: 'noopener noreferrer',
                      },
                      'Tool Diversity as a Means of Improving Aggregate Crowd Performance on Image Segmentation Tasks'
                    ),
                    '. In ',
                    c.a.createElement(
                      'i',
                      null,
                      'HCOMP Workshop on Human Computation for Image and Video Analysis (GroupSight 2017)'
                    ),
                    '. Quebec City, Quebec. 2017.'
                  ),
                  c.a.createElement(
                    'div',
                    { class: 'publication' },
                    'S.R. Gouravajhala, J.Y. Song, J. Yim, ',
                    c.a.createElement('b', null, 'R. Fok'),
                    ', Y. Huang, F. Yang, K. Wang, Y. An, W.S. Lasecki. ',
                    c.a.createElement(
                      'a',
                      {
                        href: v.a,
                        target: '_blank',
                        rel: 'noopener noreferrer',
                      },
                      'Towards Hybrid Intelligence for Robotics'
                    ),
                    '. In ',
                    c.a.createElement(
                      'i',
                      null,
                      'Collective Intelligence Conference (CI 2017)'
                    ),
                    '. New York, NY. [',
                    c.a.createElement(
                      'a',
                      {
                        href: k.a,
                        target: '_blank',
                        rel: 'noopener noreferrer',
                      },
                      'POSTER'
                    ),
                    ']'
                  ),
                  t
                ),
                c.a.createElement(
                  'article',
                  {
                    id: 'blog',
                    className:
                      ('blog' === this.props.article ? 'active' : '') +
                      ' ' +
                      (this.props.articleTimeout ? 'timeout' : ''),
                    style: { display: 'none' },
                  },
                  c.a.createElement('h2', { className: 'major' }, 'Blog'),
                  c.a.createElement('p', null, 'Coming soon!'),
                  t
                ),
                c.a.createElement(
                  'article',
                  {
                    id: 'contact',
                    className:
                      ('contact' === this.props.article ? 'active' : '') +
                      ' ' +
                      (this.props.articleTimeout ? 'timeout' : ''),
                    style: { display: 'none' },
                  },
                  c.a.createElement('h2', { className: 'major' }, 'Contact'),
                  c.a.createElement(
                    'form',
                    { method: 'post', action: '#' },
                    c.a.createElement(
                      'div',
                      { className: 'field half first' },
                      c.a.createElement('label', { htmlFor: 'name' }, 'Name'),
                      c.a.createElement('input', {
                        type: 'text',
                        name: 'name',
                        id: 'name',
                      })
                    ),
                    c.a.createElement(
                      'div',
                      { className: 'field half' },
                      c.a.createElement('label', { htmlFor: 'email' }, 'Email'),
                      c.a.createElement('input', {
                        type: 'text',
                        name: 'email',
                        id: 'email',
                      })
                    ),
                    c.a.createElement(
                      'div',
                      { className: 'field' },
                      c.a.createElement(
                        'label',
                        { htmlFor: 'message' },
                        'Message'
                      ),
                      c.a.createElement('textarea', {
                        name: 'message',
                        id: 'message',
                        rows: '4',
                      })
                    ),
                    c.a.createElement(
                      'ul',
                      { className: 'actions' },
                      c.a.createElement(
                        'li',
                        null,
                        c.a.createElement('input', {
                          type: 'submit',
                          value: 'Send Message',
                          className: 'special',
                        })
                      ),
                      c.a.createElement(
                        'li',
                        null,
                        c.a.createElement('input', {
                          type: 'reset',
                          value: 'Reset',
                        })
                      )
                    )
                  ),
                  c.a.createElement(
                    'ul',
                    { className: 'icons' },
                    c.a.createElement(
                      'li',
                      null,
                      c.a.createElement(
                        'a',
                        {
                          href: 'https://twitter.com/',
                          className: 'icon fa-twitter',
                          target: '_blank',
                          rel: 'noopener noreferrer',
                        },
                        c.a.createElement(
                          'span',
                          { className: 'label' },
                          'Twitter'
                        )
                      )
                    ),
                    c.a.createElement(
                      'li',
                      null,
                      c.a.createElement(
                        'a',
                        {
                          href: 'https://www.facebook.com/raymond.fok.75',
                          className: 'icon fa-facebook',
                          target: '_blank',
                          rel: 'noopener noreferrer',
                        },
                        c.a.createElement(
                          'span',
                          { className: 'label' },
                          'Facebook'
                        )
                      )
                    ),
                    c.a.createElement(
                      'li',
                      null,
                      c.a.createElement(
                        'a',
                        {
                          href: 'https://github.com/rayfok',
                          className: 'icon fa-github',
                          target: '_blank',
                          rel: 'noopener noreferrer',
                        },
                        c.a.createElement(
                          'span',
                          { className: 'label' },
                          'GitHub'
                        )
                      )
                    ),
                    c.a.createElement(
                      'li',
                      null,
                      c.a.createElement(
                        'a',
                        {
                          href: 'https://www.linkedin.com/in/raymond-fok/',
                          className: 'icon fa-linkedin',
                          target: '_blank',
                          rel: 'noopener noreferrer',
                        },
                        c.a.createElement(
                          'span',
                          { className: 'label' },
                          'LinkedIn'
                        )
                      )
                    ),
                    c.a.createElement(
                      'li',
                      null,
                      c.a.createElement(
                        'a',
                        {
                          href:
                            'https://scholar.google.com/citations?user=j238omAAAAAJ',
                          className: 'icon fa-google',
                          target: '_blank',
                          rel: 'noopener noreferrer',
                        },
                        c.a.createElement(
                          'span',
                          { className: 'label' },
                          'Google Scholar'
                        )
                      )
                    )
                  ),
                  t
                )
              )
            }),
            t
          )
        })(c.a.Component)
      F.propTypes = {
        route: u.a.object,
        article: u.a.string,
        articleTimeout: u.a.bool,
        onCloseArticle: u.a.func,
        timeout: u.a.bool,
        setWrapperRef: u.a.func.isRequired,
      }
      var _ = F,
        W = function(e) {
          return c.a.createElement(
            'footer',
            { id: 'footer', style: e.timeout ? { display: 'none' } : {} },
            c.a.createElement(
              'p',
              { className: 'copyright' },
              '© Raymond Fok 2018. Built with: ',
              c.a.createElement(
                'a',
                { href: 'https://www.gatsbyjs.org/' },
                'Gatsby.js'
              ),
              ' and ',
              c.a.createElement(
                'a',
                { href: 'https://reactjs.org/' },
                'React.js'
              )
            )
          )
        }
      W.propTypes = { timeout: u.a.bool }
      var M = W,
        O = (function(e) {
          function t(t) {
            var a
            return (
              ((a = e.call(this, t) || this).state = {
                isArticleVisible: !1,
                timeout: !1,
                articleTimeout: !1,
                article: '',
                loading: 'is-loading',
              }),
              (a.handleOpenArticle = a.handleOpenArticle.bind(i()(i()(a)))),
              (a.handleCloseArticle = a.handleCloseArticle.bind(i()(i()(a)))),
              (a.setWrapperRef = a.setWrapperRef.bind(i()(i()(a)))),
              (a.handleClickOutside = a.handleClickOutside.bind(i()(i()(a)))),
              a
            )
          }
          r()(t, e)
          var a = t.prototype
          return (
            (a.componentDidMount = function() {
              var e = this
              ;(this.timeoutId = setTimeout(function() {
                e.setState({ loading: '' })
              }, 100)),
                document.addEventListener('mousedown', this.handleClickOutside)
            }),
            (a.componentWillUnmount = function() {
              this.timeoutId && clearTimeout(this.timeoutId),
                document.removeEventListener(
                  'mousedown',
                  this.handleClickOutside
                )
            }),
            (a.setWrapperRef = function(e) {
              this.wrapperRef = e
            }),
            (a.handleOpenArticle = function(e) {
              var t = this
              this.setState({
                isArticleVisible: !this.state.isArticleVisible,
                article: e,
              }),
                setTimeout(function() {
                  t.setState({ timeout: !t.state.timeout })
                }, 325),
                setTimeout(function() {
                  t.setState({ articleTimeout: !t.state.articleTimeout })
                }, 350)
            }),
            (a.handleCloseArticle = function() {
              var e = this
              this.setState({ articleTimeout: !this.state.articleTimeout }),
                setTimeout(function() {
                  e.setState({ timeout: !e.state.timeout })
                }, 325),
                setTimeout(function() {
                  e.setState({
                    isArticleVisible: !e.state.isArticleVisible,
                    article: '',
                  })
                }, 350)
            }),
            (a.handleClickOutside = function(e) {
              this.wrapperRef &&
                !this.wrapperRef.contains(e.target) &&
                this.state.isArticleVisible &&
                this.handleCloseArticle()
            }),
            (a.render = function() {
              return c.a.createElement(
                s.a,
                { location: this.props.location },
                c.a.createElement(
                  'div',
                  {
                    className:
                      'body ' +
                      this.state.loading +
                      ' ' +
                      (this.state.isArticleVisible ? 'is-article-visible' : ''),
                  },
                  c.a.createElement(
                    'div',
                    { id: 'wrapper' },
                    c.a.createElement(h, {
                      onOpenArticle: this.handleOpenArticle,
                      timeout: this.state.timeout,
                    }),
                    c.a.createElement(_, {
                      isArticleVisible: this.state.isArticleVisible,
                      timeout: this.state.timeout,
                      articleTimeout: this.state.articleTimeout,
                      article: this.state.article,
                      onCloseArticle: this.handleCloseArticle,
                      setWrapperRef: this.setWrapperRef,
                    }),
                    c.a.createElement(M, { timeout: this.state.timeout })
                  ),
                  c.a.createElement('div', { id: 'bg' })
                )
              )
            }),
            t
          )
        })(c.a.Component)
      t.default = O
    },
    160: function(e, t, a) {
      var n = a(6)
      n(n.P, 'Function', { bind: a(161) })
    },
    161: function(e, t, a) {
      'use strict'
      var n = a(16),
        r = a(10),
        l = a(75),
        i = [].slice,
        o = {}
      e.exports =
        Function.bind ||
        function(e) {
          var t = n(this),
            a = i.call(arguments, 1),
            c = function() {
              var n = a.concat(i.call(arguments))
              return this instanceof c
                ? (function(e, t, a) {
                    if (!(t in o)) {
                      for (var n = [], r = 0; r < t; r++) n[r] = 'a[' + r + ']'
                      o[t] = Function(
                        'F,a',
                        'return new F(' + n.join(',') + ')'
                      )
                    }
                    return o[t](e, a)
                  })(t, n.length, n)
                : l(t, n, e)
            }
          return r(t.prototype) && (c.prototype = t.prototype), c
        }
    },
    162: function(e, t, a) {
      e.exports = a.p + 'static/rayfokcv-29a65353d6d619e1d64a118b43ece5c4.pdf'
    },
    163: function(e, t, a) {
      e.exports =
        a.p +
        'static/ASSETS2018_SpeechAccess-77600430451baa031e40e61b776cfda0.pdf'
    },
    164: function(e, t, a) {
      e.exports =
        a.p +
        'static/CI2017_TowardsHybridIntelligenceForRobotics_POSTER-b88c9586f0d39e471021c027a4d52e63.pdf'
    },
    165: function(e, t, a) {
      e.exports =
        a.p +
        'static/CI2017_TowardsHybridIntelligenceForRobotics-a41e62ded3817092f96312600d2c3158.pdf'
    },
    166: function(e, t, a) {
      e.exports =
        a.p +
        'static/GroupSight2017_FourEyes-56a0e66a31c64c5e11e4e6c1d522ebd7.pdf'
    },
    167: function(e, t, a) {
      e.exports =
        a.p + 'static/IUI2018_FourEyes-604b187260d851a895f9f9abd4341d61.pdf'
    },
    168: function(e, t, a) {
      e.exports =
        a.p + 'static/TiiS2018_FourEyes-5b61017d0addade1c167e5b809732eae.pdf'
    },
    169: function(e, t, a) {
      e.exports =
        a.p + 'static/UIST2017_WearMail-b77c4d216642655c56499328dc8b7280.pdf'
    },
  },
])
//# sourceMappingURL=component---src-pages-index-js-ba300a9090fa705d910b.js.map
