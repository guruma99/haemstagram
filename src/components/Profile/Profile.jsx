import React from "react";
import "./css/index.css";

function Profile() {
  return (
    <div className="profile">
      <div className="wrapper">
        <div className="info">
          <div className="profile-image"></div>
          <div className="profile-desc">
            <div className="nickname txt-bold">haemin</div>
            {false ? (
              <div className="quote">
                <textarea placeholder="자신의 한 줄평을 입력해주세요"></textarea>
              </div>
            ) : (
              <>
                <div className="quote">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  beatae quia neque quam saepe suscipit magnam quae molestias
                  quos. Amet harum quisquam, cupiditat. Quas, expedita!
                </div>
                <div className="follow-btn txt-bold">팔로우하기</div>
              </>
            )}
          </div>
        </div>

        <div className="feed-images">
          <div className="feed-image">
            <img
              src="https://www.wallpaperflare.com/static/425/35/654/wolf-howling-moon-silhouette-minimal-wallpaper.jpg"
              alt=""
            />
          </div>

          <div className="feed-image">
            <img
              src="https://cutewallpaper.org/23/2160-x-1440-wallpaper/2713227578.jpg"
              alt=""
            />
          </div>

          <div className="feed-image">
            <img
              src="https://api.time.com/wp-content/uploads/2014/05/wallpaperfx.jpg?quality=85&w=2880"
              alt=""
            />
          </div>

          <div className="feed-image">
            <img
              src="https://cdn.shopify.com/s/files/1/0285/1316/products/w0263_1s_Nautical-Waves-Wallpaper-for-Walls-Waves-of-Chic_Repeating-Pattern-Sample-1.jpg?v=1604091534"
              alt=""
            />
          </div>

          <div className="feed-image">
            <img
              src="https://images.unsplash.com/photo-1610624279929-1009009110ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8dWRxNWRDQ2RsX2d8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=420&q=60"
              alt=""
            />
          </div>

          <div className="feed-image">
            <img
              src="https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg?cs=srgb&dl=pexels-piccinng-3052361.jpg&fm=jpg"
              alt=""
            />
          </div>

          <div className="feed-image">
            <img
              src="https://e0.pxfuel.com/wallpapers/32/148/desktop-wallpaper-white-widescreen-black-and-white-city.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="profile-contents">
          <div className="feed-list">
            <div className="title txt-bold">작성한 글</div>
            <div className="feeds">
              <div className="feed">
                <div className="top">
                  <div className="profile-image"></div>
                  <div className="profile-desc">
                    <div className="nickname txt-bold">haemin</div>
                    <div className="timestamp">8:15 pm, yesterday</div>
                  </div>
                </div>

                <div className="contents">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aliquam commodi nihil est dolores, maiores ut veniam incidunt?
                  Itaque placeat dicta sit voluptate, praesentium architecto
                  amet facilis quo nam, consequuntur est.
                </div>

                <div className="bottom">
                  <div className="like">
                    <div className="asset">
                      <img src="/assets/feed/like-dac.svg" alt="좋아요" />
                    </div>
                    <div className="count">25k</div>
                  </div>
                  <div className="comment">
                    <div className="asset">
                      <img src="/assets/feed/comment.svg" alt="댓글" />
                    </div>
                    <div className="count txt-bold">2k</div>
                  </div>
                </div>
              </div>
              <div className="feed">
                <div className="top">
                  <div className="profile-image"></div>
                  <div className="profile-desc">
                    <div className="nickname txt-bold">haemin</div>
                    <div className="timestamp">8:15 pm, yesterday</div>
                  </div>
                </div>

                <div className="contents">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aliquam commodi nihil est dolores, maiores ut veniam incidunt?
                  Itaque placeat dicta sit voluptate, praesentium architecto
                  amet facilis quo nam, consequuntur est.
                  <div className="image"></div>
                </div>

                <div className="bottom">
                  <div className="like">
                    <div className="asset">
                      <img src="/assets/feed/like-dac.svg" alt="좋아요" />
                    </div>
                    <div className="count">25k</div>
                  </div>
                  <div className="comment">
                    <div className="asset">
                      <img src="/assets/feed/comment.svg" alt="댓글" />
                    </div>
                    <div className="count txt-bold">2k</div>
                  </div>
                </div>
              </div>
              <div className="feed">
                <div className="top">
                  <div className="profile-image"></div>
                  <div className="profile-desc">
                    <div className="nickname txt-bold">haemin</div>
                    <div className="timestamp">8:15 pm, yesterday</div>
                  </div>
                </div>

                <div className="contents">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aliquam commodi nihil est dolores, maiores ut veniam incidunt?
                  Itaque placeat dicta sit voluptate, praesentium architecto
                  amet facilis quo nam, consequuntur est.
                </div>

                <div className="bottom">
                  <div className="like">
                    <div className="asset">
                      <img src="/assets/feed/like-dac.svg" alt="좋아요" />
                    </div>
                    <div className="count">25k</div>
                  </div>
                  <div className="comment">
                    <div className="asset">
                      <img src="/assets/feed/comment.svg" alt="댓글" />
                    </div>
                    <div className="count txt-bold">2k</div>
                  </div>
                </div>
              </div>
              <div className="feed">
                <div className="top">
                  <div className="profile-image"></div>
                  <div className="profile-desc">
                    <div className="nickname txt-bold">haemin</div>
                    <div className="timestamp">8:15 pm, yesterday</div>
                  </div>
                </div>

                <div className="contents">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aliquam commodi nihil est dolores, maiores ut veniam incidunt?
                  Itaque placeat dicta sit voluptate, praesentium architecto
                  amet facilis quo nam, consequuntur est.
                </div>

                <div className="bottom">
                  <div className="like">
                    <div className="asset">
                      <img src="/assets/feed/like-dac.svg" alt="좋아요" />
                    </div>
                    <div className="count">25k</div>
                  </div>
                  <div className="comment">
                    <div className="asset">
                      <img src="/assets/feed/comment.svg" alt="댓글" />
                    </div>
                    <div className="count txt-bold">2k</div>
                  </div>
                </div>
              </div>
              <div className="feed">
                <div className="top">
                  <div className="profile-image"></div>
                  <div className="profile-desc">
                    <div className="nickname txt-bold">haemin</div>
                    <div className="timestamp">8:15 pm, yesterday</div>
                  </div>
                </div>

                <div className="contents">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aliquam commodi nihil est dolores, maiores ut veniam incidunt?
                  Itaque placeat dicta sit voluptate, praesentium architecto
                  amet facilis quo nam, consequuntur est.
                </div>

                <div className="bottom">
                  <div className="like">
                    <div className="asset">
                      <img src="/assets/feed/like-dac.svg" alt="좋아요" />
                    </div>
                    <div className="count">25k</div>
                  </div>
                  <div className="comment">
                    <div className="asset">
                      <img src="/assets/feed/comment.svg" alt="댓글" />
                    </div>
                    <div className="count txt-bold">2k</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="profile-info-desc">
            <div className="desc">
              <div className="title txt-bold">좋아요</div>
              <div className="count">739,000</div>
            </div>
            <div className="desc">
              <div className="title txt-bold">팔로워</div>
              <div className="count">2,539,000</div>
            </div>
            <div className="desc">
              <div className="title txt-bold">포스트</div>
              <div className="count">320</div>
            </div>
            <div className="desc">
              <div className="title txt-bold">친구</div>
              <div className="count">236,320</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
