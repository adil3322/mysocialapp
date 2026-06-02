  import { useState } from "react";

const initialPosts = [
  {
    id: 1,
    user: "Md khurshid Alam",
    handle: "@khurshid",
    avatar: "SK",
    avatarColor: "#f472b6",
    time: "2 min ago",
    content: "Aaj ka din bohot acha raha 🌟 Naye project pe kaam shuru kiya aur bohot kuch seekha. Life is beautiful when you keep learning!",
    image: null,
    likes: 48,
    comments: [
      { id: 1, user: "Ali Khan", text: "MashaAllah! Bahut acha hai 🙌", avatar: "AK", color: "#60a5fa" },
    ],
    shares: 12,
    liked: false,
    followed: false,
    showComments: false,
  },
  {
    id: 2,
    user: "Fakhrul islam",
    handle: "@Fakhrul",
    avatar: "FI",
    avatarColor: "#34d399",
    time: "15 min ago",
    content: "React.js seekh raha hoon aur yaar ye toh seriously mind-blowing hai 🚀 Components ka concept ekdum unique hai. Koi tips dena chahega? 💻",
    image: null,
    likes: 134,
    comments: [
      { id: 1, user: "Sara Ali", text: "Official docs best hai! 📖", avatar: "SA", color: "#fb923c" },
      { id: 2, user: "Ahmed khan ", text: "useState samajh lo pehle 😄", avatar: "AK", color: "#a78bfa" },
    ],
    shares: 27,
    liked: false,
    followed: false,
    showComments: false,
  },
  {
    id: 3,
    user: "Shama perween",
    handle: "@Shama.m",
    avatar: "SP",
    avatarColor: "#fb923c",
    time: "1 hr ago",
    content: "Sunset ki photo li aaj new Delhi mein 🌅 Nature ki khubsurti ko words mein bayaan karna mushkil hai. Alhamdulillah for such beautiful moments ✨",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    likes: 312,
    comments: [],
    shares: 89,
    liked: false,
    followed: false,
    showComments: false,
  },
  {
    id: 4,
    user: "Shakila bano",
    handle: "@Shakilacodes",
    avatar: "BS",
    avatarColor: "#a78bfa",
    time: "3 hrs ago",
    content: "Portfolio website finally complete ho gaya! 🎉 Itne din ki mehnat rang layi. Web development journey amazing hai — har din kuch naya seekhne ko milta hai. Link soon! 🔗",
    image: null,
    likes: 201,
    comments: [
      { id: 1, user: "Shakila Bano", text: "Congratulations bhai! 🎊", avatar: "BS", color: "#f472b6" },
    ],
    shares: 45,
    liked: false,
    followed: false,
    showComments: false,
  },
];

const suggestions = [
  { name: "Prince Alam", handle: "@prince", avatar: "PA", color: "#f472b6" },
  { name: "Sahroz Alam", handle: "@Shahal", avatar: "AS", color: "#34d399" },
  { name: "Afroz Alam", handle: "@Afroz", avatar: "AA", color: "#60a5fa" },
];

export default function SocialApp() {
  const [posts, setPosts] = useState(initialPosts);
  const [newPostText, setNewPostText] = useState("");
  const [commentTexts, setCommentTexts] = useState({});
  const [followed, setFollowed] = useState({});
  const [activeTab, setActiveTab] = useState("home");

  const handleLike = (id) => {
    setPosts(posts.map(p =>
      p.id === id ? { ...p, liked: !p.liked, likes: p.liked ? p.likes - 1 : p.likes + 1 } : p
    ));
  };

  const handleFollow = (id) => {
    setPosts(posts.map(p =>
      p.id === id ? { ...p, followed: !p.followed } : p
    ));
  };

  const handleShare = (id) => {
    setPosts(posts.map(p =>
      p.id === id ? { ...p, shares: p.shares + 1 } : p
    ));
  };

  const toggleComments = (id) => {
    setPosts(posts.map(p =>
      p.id === id ? { ...p, showComments: !p.showComments } : p
    ));
  };

  const addComment = (id) => {
    const text = commentTexts[id]?.trim();
    if (!text) return;
    setPosts(posts.map(p =>
      p.id === id ? {
        ...p,
        comments: [...p.comments, { id: Date.now(), user: "Adil", text, avatar: "AD", color: "#06b6d4" }]
      } : p
    ));
    setCommentTexts({ ...commentTexts, [id]: "" });
  };

  const addPost = () => {
    if (!newPostText.trim()) return;
    const newPost = {
      id: Date.now(),
      user: "Adil",
      handle: "@adil3322",
      avatar: "AD",
      avatarColor: "#06b6d4",
      time: "Just now",
      content: newPostText,
      image: null,
      likes: 0,
      comments: [],
      shares: 0,
      liked: false,
      followed: false,
      showComments: false,
    };
    setPosts([newPost, ...posts]);
    setNewPostText("");
  };

  const followSuggestion = (name) => {
    setFollowed({ ...followed, [name]: !followed[name] });
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
      fontFamily: "'Segoe UI', sans-serif",
      color: "#e2e8f0",
    }}>
      {/* Top Navbar */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "rgba(15,12,41,0.85)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        padding: "0 24px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: "60px",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{
            width: 36, height: 36, borderRadius: "10px",
            background: "linear-gradient(135deg, #06b6d4, #8b5cf6)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "18px", fontWeight: 800, color: "#fff",
          }}>S</div>
          <span style={{ fontSize: "20px", fontWeight: 800, background: "linear-gradient(90deg, #06b6d4, #8b5cf6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            SocialHub
          </span>
        </div>

        {/* Search */}
        <div style={{ position: "relative", width: "280px" }}>
          <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", opacity: 0.4 }}>🔍</span>
          <input placeholder="Search posts, people..." style={{
            width: "100%", padding: "8px 12px 8px 36px",
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "20px", color: "#e2e8f0", fontSize: "13px",
            outline: "none", boxSizing: "border-box",
          }} />
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <span style={{ cursor: "pointer", fontSize: "20px", position: "relative" }}>
            🔔
            <span style={{
              position: "absolute", top: -4, right: -4,
              background: "#ef4444", borderRadius: "50%",
              width: 14, height: 14, fontSize: "9px",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#fff", fontWeight: 700
            }}>3</span>
          </span>
          <div style={{
            width: 36, height: 36, borderRadius: "50%",
            background: "linear-gradient(135deg, #06b6d4, #8b5cf6)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 700, fontSize: "13px", cursor: "pointer",
          }}>AD</div>
        </div>
      </nav>

      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", gap: "24px", padding: "24px 16px" }}>

        {/* Left Sidebar — Profile */}
        <aside style={{ width: "260px", flexShrink: 0 }}>
          <div style={{
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "20px",
            overflow: "hidden",
            position: "sticky", top: "84px",
          }}>
            {/* Cover */}
            <div style={{
              height: "80px",
              background: "linear-gradient(135deg, #06b6d4, #8b5cf6, #ec4899)",
              position: "relative",
            }}>
              <div style={{ position: "absolute", bottom: -28, left: "50%", transform: "translateX(-50%)" }}>
                <div style={{
                  width: 60, height: 60, borderRadius: "50%",
                  background: "linear-gradient(135deg, #06b6d4, #8b5cf6)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 800, fontSize: "20px", color: "#fff",
                  border: "3px solid #0f0c29",
                }}>AD</div>
              </div>
            </div>

            <div style={{ padding: "36px 20px 20px", textAlign: "center" }}>
              <h3 style={{ margin: 0, fontSize: "16px", fontWeight: 700, color: "#f1f5f9" }}>Adil</h3>
              <p style={{ margin: "2px 0 4px", fontSize: "12px", color: "#94a3b8" }}>@adil3322</p>
              <p style={{ margin: "8px 0 12px", fontSize: "12px", color: "#94a3b8", lineHeight: 1.5 }}>
                Full-Stack Web Developer 🚀<br />Building cool stuff on the internet
              </p>
              <div style={{ display: "flex", gap: "4px", flexWrap: "wrap", justifyContent: "center", marginBottom: "14px" }}>
                {["React", "Node.js", "Firebase", "Django"].map(tag => (
                  <span key={tag} style={{
                    padding: "2px 8px", borderRadius: "10px", fontSize: "10px",
                    background: "rgba(6,182,212,0.15)", color: "#06b6d4",
                    border: "1px solid rgba(6,182,212,0.3)",
                  }}>{tag}</span>
                ))}
              </div>

              <div style={{ display: "flex", justifyContent: "space-around", padding: "12px 0", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", marginBottom: "14px" }}>
                {[["Posts", "24"], ["Followers", "1.2K"], ["Following", "340"]].map(([label, val]) => (
                  <div key={label} style={{ textAlign: "center" }}>
                    <div style={{ fontWeight: 700, fontSize: "15px", color: "#f1f5f9" }}>{val}</div>
                    <div style={{ fontSize: "10px", color: "#64748b" }}>{label}</div>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "12px", color: "#94a3b8" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>📍</span> Patna, India
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>🔗</span>
                  <a href="https://github.com/adil3322" style={{ color: "#06b6d4", textDecoration: "none" }}>github.com/adil3322</a>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>📅</span> Joined Jan 2026
                </div>
              </div>

              <button style={{
                marginTop: "14px", width: "100%", padding: "9px",
                background: "linear-gradient(135deg, #06b6d4, #8b5cf6)",
                border: "none", borderRadius: "10px", color: "#fff",
                fontWeight: 600, fontSize: "13px", cursor: "pointer",
              }}>✏️ Edit Profile</button>
            </div>
          </div>

          {/* Suggestions */}
          <div style={{
            marginTop: "16px",
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "20px",
            padding: "16px",
          }}>
            <h4 style={{ margin: "0 0 14px", fontSize: "13px", color: "#94a3b8", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>People to Follow</h4>
            {suggestions.map(s => (
              <div key={s.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{
                    width: 34, height: 34, borderRadius: "50%",
                    background: s.color, display: "flex", alignItems: "center",
                    justifyContent: "center", fontSize: "12px", fontWeight: 700, color: "#fff",
                    flexShrink: 0,
                  }}>{s.avatar}</div>
                  <div>
                    <div style={{ fontSize: "12px", fontWeight: 600, color: "#f1f5f9" }}>{s.name}</div>
                    <div style={{ fontSize: "10px", color: "#64748b" }}>{s.handle}</div>
                  </div>
                </div>
                <button onClick={() => followSuggestion(s.name)} style={{
                  padding: "4px 12px", borderRadius: "20px", fontSize: "11px",
                  border: followed[s.name] ? "1px solid rgba(255,255,255,0.15)" : "1px solid #06b6d4",
                  background: followed[s.name] ? "transparent" : "rgba(6,182,212,0.15)",
                  color: followed[s.name] ? "#64748b" : "#06b6d4",
                  cursor: "pointer", fontWeight: 600,
                  transition: "all 0.2s",
                }}>{followed[s.name] ? "Following" : "Follow"}</button>
              </div>
            ))}
          </div>
        </aside>

        {/* Main Feed */}
        <main style={{ flex: 1, minWidth: 0 }}>
          {/* Tabs */}
          <div style={{ display: "flex", gap: "4px", marginBottom: "20px" }}>
            {["home", "trending", "explore"].map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} style={{
                padding: "8px 20px", borderRadius: "20px", border: "none",
                background: activeTab === tab ? "linear-gradient(135deg, #06b6d4, #8b5cf6)" : "rgba(255,255,255,0.06)",
                color: activeTab === tab ? "#fff" : "#94a3b8",
                fontWeight: 600, fontSize: "13px", cursor: "pointer",
                textTransform: "capitalize",
                transition: "all 0.2s",
              }}>{tab === "home" ? "🏠 Home" : tab === "trending" ? "🔥 Trending" : "🌐 Explore"}</button>
            ))}
          </div>

          {/* New Post Box */}
          <div style={{
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "20px",
            padding: "20px",
            marginBottom: "20px",
          }}>
            <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
              <div style={{
                width: 42, height: 42, borderRadius: "50%", flexShrink: 0,
                background: "linear-gradient(135deg, #06b6d4, #8b5cf6)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontWeight: 700, fontSize: "14px",
              }}>AD</div>
              <textarea
                placeholder="Kya soch rahe ho aaj? Share karo... ✨"
                value={newPostText}
                onChange={e => setNewPostText(e.target.value)}
                rows={3}
                style={{
                  flex: 1, background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "12px", color: "#e2e8f0",
                  padding: "12px", fontSize: "14px", resize: "none",
                  outline: "none", fontFamily: "inherit",
                }}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "12px", paddingLeft: "54px" }}>
              <div style={{ display: "flex", gap: "16px" }}>
                {["📷 Photo", "🎥 Video", "😊 Emoji"].map(btn => (
                  <button key={btn} style={{
                    background: "none", border: "none", color: "#64748b",
                    fontSize: "12px", cursor: "pointer", fontWeight: 600,
                    padding: "4px 8px", borderRadius: "8px",
                  }}>{btn}</button>
                ))}
              </div>
              <button onClick={addPost} style={{
                padding: "8px 24px",
                background: newPostText.trim() ? "linear-gradient(135deg, #06b6d4, #8b5cf6)" : "rgba(255,255,255,0.07)",
                border: "none", borderRadius: "20px", color: newPostText.trim() ? "#fff" : "#475569",
                fontWeight: 700, fontSize: "13px", cursor: newPostText.trim() ? "pointer" : "default",
                transition: "all 0.2s",
              }}>Post Karo 🚀</button>
            </div>
          </div>

          {/* Posts */}
          {posts.map(post => (
            <div key={post.id} style={{
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "20px",
              padding: "20px",
              marginBottom: "16px",
              transition: "border-color 0.2s",
            }}>
              {/* Post Header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "14px" }}>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: "50%",
                    background: post.avatarColor,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 700, fontSize: "15px", color: "#fff", flexShrink: 0,
                  }}>{post.avatar}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "14px", color: "#f1f5f9" }}>{post.user}</div>
                    <div style={{ fontSize: "12px", color: "#64748b" }}>{post.handle} · {post.time}</div>
                  </div>
                </div>
                <button onClick={() => handleFollow(post.id)} style={{
                  padding: "6px 16px", borderRadius: "20px", fontSize: "12px",
                  border: post.followed ? "1px solid rgba(255,255,255,0.12)" : "1px solid #8b5cf6",
                  background: post.followed ? "rgba(255,255,255,0.05)" : "rgba(139,92,246,0.15)",
                  color: post.followed ? "#64748b" : "#a78bfa",
                  cursor: "pointer", fontWeight: 600,
                  transition: "all 0.2s",
                }}>{post.followed ? "✓ Following" : "+ Follow"}</button>
              </div>

              {/* Post Content */}
              <p style={{ margin: "0 0 14px", lineHeight: 1.6, color: "#cbd5e1", fontSize: "14px" }}>{post.content}</p>

              {post.image && (
                <div style={{ borderRadius: "12px", overflow: "hidden", marginBottom: "14px" }}>
                  <img src={post.image} alt="post" style={{ width: "100%", display: "block", maxHeight: "300px", objectFit: "cover" }} />
                </div>
              )}

              {/* Action Bar */}
              <div style={{
                display: "flex", gap: "4px",
                paddingTop: "12px",
                borderTop: "1px solid rgba(255,255,255,0.06)",
              }}>
                <button onClick={() => handleLike(post.id)} style={{
                  display: "flex", alignItems: "center", gap: "6px",
                  padding: "7px 14px", borderRadius: "20px", border: "none",
                  background: post.liked ? "rgba(239,68,68,0.15)" : "rgba(255,255,255,0.05)",
                  color: post.liked ? "#f87171" : "#64748b",
                  cursor: "pointer", fontSize: "13px", fontWeight: 600,
                  transition: "all 0.2s",
                }}>
                  {post.liked ? "❤️" : "🤍"} {post.likes}
                </button>

                <button onClick={() => toggleComments(post.id)} style={{
                  display: "flex", alignItems: "center", gap: "6px",
                  padding: "7px 14px", borderRadius: "20px", border: "none",
                  background: post.showComments ? "rgba(6,182,212,0.15)" : "rgba(255,255,255,0.05)",
                  color: post.showComments ? "#06b6d4" : "#64748b",
                  cursor: "pointer", fontSize: "13px", fontWeight: 600,
                  transition: "all 0.2s",
                }}>
                  💬 {post.comments.length}
                </button>

                <button onClick={() => handleShare(post.id)} style={{
                  display: "flex", alignItems: "center", gap: "6px",
                  padding: "7px 14px", borderRadius: "20px", border: "none",
                  background: "rgba(255,255,255,0.05)", color: "#64748b",
                  cursor: "pointer", fontSize: "13px", fontWeight: 600,
                  transition: "all 0.2s",
                }}>
                  🔗 {post.shares}
                </button>

                <button style={{
                  marginLeft: "auto",
                  display: "flex", alignItems: "center", gap: "6px",
                  padding: "7px 14px", borderRadius: "20px", border: "none",
                  background: "rgba(255,255,255,0.05)", color: "#64748b",
                  cursor: "pointer", fontSize: "13px", fontWeight: 600,
                }}>🔖</button>
              </div>

              {/* Comments Section */}
              {post.showComments && (
                <div style={{ marginTop: "14px" }}>
                  {post.comments.map(c => (
                    <div key={c.id} style={{ display: "flex", gap: "10px", marginBottom: "10px", alignItems: "flex-start" }}>
                      <div style={{
                        width: 30, height: 30, borderRadius: "50%",
                        background: c.color, flexShrink: 0,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "11px", fontWeight: 700, color: "#fff",
                      }}>{c.avatar}</div>
                      <div style={{
                        background: "rgba(255,255,255,0.06)", borderRadius: "12px",
                        padding: "8px 12px", flex: 1,
                      }}>
                        <span style={{ fontWeight: 700, fontSize: "12px", color: "#94a3b8" }}>{c.user} </span>
                        <span style={{ fontSize: "13px", color: "#cbd5e1" }}>{c.text}</span>
                      </div>
                    </div>
                  ))}
                  <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
                    <div style={{
                      width: 30, height: 30, borderRadius: "50%", flexShrink: 0,
                      background: "linear-gradient(135deg, #06b6d4, #8b5cf6)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "11px", fontWeight: 700,
                    }}>AD</div>
                    <input
                      placeholder="Comment likho..."
                      value={commentTexts[post.id] || ""}
                      onChange={e => setCommentTexts({ ...commentTexts, [post.id]: e.target.value })}
                      onKeyDown={e => e.key === "Enter" && addComment(post.id)}
                      style={{
                        flex: 1, background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: "20px", color: "#e2e8f0",
                        padding: "7px 14px", fontSize: "13px", outline: "none",
                        fontFamily: "inherit",
                      }}
                    />
                    <button onClick={() => addComment(post.id)} style={{
                      padding: "7px 14px", borderRadius: "20px", border: "none",
                      background: "linear-gradient(135deg, #06b6d4, #8b5cf6)",
                      color: "#fff", cursor: "pointer", fontSize: "12px", fontWeight: 600,
                    }}>Send</button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </main>

        {/* Right Sidebar */}
        <aside style={{ width: "240px", flexShrink: 0 }}>
          {/* Trending */}
          <div style={{
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "20px", padding: "16px",
            position: "sticky", top: "84px",
          }}>
            <h4 style={{ margin: "0 0 14px", fontSize: "13px", color: "#94a3b8", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>🔥 Trending</h4>
            {["#WebDevelopment", "#ReactJS", "#Bihar", "#TechLife", "#OpenSource"].map((tag, i) => (
              <div key={tag} style={{
                padding: "8px 0",
                borderBottom: i < 4 ? "1px solid rgba(255,255,255,0.05)" : "none",
                cursor: "pointer",
              }}>
                <div style={{ fontSize: "13px", fontWeight: 600, color: "#06b6d4" }}>{tag}</div>
                <div style={{ fontSize: "11px", color: "#475569" }}>{(Math.random() * 5 + 1).toFixed(1)}K posts</div>
              </div>
            ))}
          </div>

          {/* Active Now */}
          <div style={{
            marginTop: "16px",
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "20px", padding: "16px",
          }}>
            <h4 style={{ margin: "0 0 14px", fontSize: "13px", color: "#94a3b8", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>🟢 Active Now</h4>
            {[
              { name: "Fakhrul islam", avatar: "FI", color: "#f472b6" },
              { name: "Shahroz Alam.", avatar: "AS", color: "#34d399" },
              { name: "Afroz Alam.", avatar: "AA", color: "#a78bfa" },
            ].map(u => (
              <div key={u.name} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                <div style={{ position: "relative" }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: "50%",
                    background: u.color,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "11px", fontWeight: 700, color: "#fff",
                  }}>{u.avatar}</div>
                  <div style={{
                    position: "absolute", bottom: 0, right: 0,
                    width: 9, height: 9, borderRadius: "50%",
                    background: "#22c55e", border: "2px solid #0f0c29",
                  }} />
                </div>
                <span style={{ fontSize: "12px", color: "#94a3b8" }}>{u.name}</span>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
